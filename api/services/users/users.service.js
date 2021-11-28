const { addData, 
    getAllData,
    find ,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
} = require('../../helpers/curd.helper');
const { user } = require('../../models/users/users.schema');


const addUser = (req, res) => {
    const userData = new user(req.appData);
    addData(res, userData);
}

const getAllUsers = (req, res) => {
    getAllData(res, user);
}

const getUser = (req, res) => {
    find(res, user, {name:req.params.id});
}

const deleteUser = (req, res) => {
    deleteAll(res, user, {name:req.params.id});
}

const updateUser = (req, res) => {
    
    let filter = {name:req.appData.name}
    let query = {$set: req.appData}
    updateOne(res, user, filter, query);
}


module.exports = {
    addUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser
}
