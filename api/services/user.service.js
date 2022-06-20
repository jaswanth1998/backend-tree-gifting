const {
    appDeafultResponse
} = require('./../helpers/appResponse.helper')
const {
    addData,
    getAllData,
    find,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll,
    lookUpAndUnwind
} = require('./../helpers/promiseCurd.helper');
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const {
    userModel
} = require('./../models/users.schema')

const createUser = async (req, res) => {
    try {
        const salt = genSaltSync(10);
        req.appData.password = hashSync(req.appData.password, salt);
        const data = new userModel(req.appData);
        const createdUser = await addData(userModel, data)
        appDeafultResponse(res, true, createdUser)
    } catch (err) {
        appDeafultResponse(res, false, err)
    }
}

const signIn = async (req, res) => {
    try {
        const userData = await find(res, userModel, { emailId: req.appData.emailId })
        if (userData.length > 0) {
            const passwordCheck = compareSync(req.appData.password, userData[0].password);
            if (passwordCheck) {
                delete userData[0].password
                const jsontoken = sign({ result: userData[0] }, process.env.JWT_KEY, {
                    expiresIn: "24h",
                });
                appDeafultResponse(res, true, { userData: userData[0], token: jsontoken, })
            } else {
                appDeafultResponse(res, true, {
                    'message': 'Incorrect password'
                })
            }

        } else {
            appDeafultResponse(res, true, { 'message': 'User does not registered' })
        }

    } catch (err) {
        appDeafultResponse(res, false, err)
    }
}

const allUsers = async (req, res) => {
    try {

        const data = await find(res, userModel, req.appData)
        appDeafultResponse(res, true, data)
    } catch (err) {
        appDeafultResponse(res, false, err)
    }
}

const deleteUser = async (req, res) => {
    try {
        const data = await deleteOne(res, userModel, req.appData)
        appDeafultResponse(res, true, data)
    } catch (err) {
        appDeafultResponse(res, false, err)
    }
}
const updateUser = async (req, res) => {
    console.log(req.appData)
    delete req.appData.password
    try {
        const data = await updateOne(res, userModel, {
            emailId: req.appData.emailId
        }, req.appData)
        appDeafultResponse(res, true, data)
    } catch (err) {
        appDeafultResponse(res, false, err)
    }
}
module.exports = {
    createUser,
    signIn,
    allUsers,
    deleteUser,
    updateUser
}