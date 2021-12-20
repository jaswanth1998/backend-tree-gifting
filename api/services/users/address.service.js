const { addData, 
    getAllData,
    find ,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
} = require('../../helpers/curd.helper');

const { address } = require('../../models/users/address.schema');

const addAddress = (req, res) => {
    const addressdata = new address(req.appData);
    addData(res, addressdata);
}

const getAddress = (req, res) => {
    getAllData(res,address);
}

const getAddressById = (req, res) => {
    find(res, address, {uid:req.params.uid});
}

const deleteAddress = (req, res) => {
    deleteAll(res, address, {_id:req.params.uid});
}

const updateAddress = (req, res) => {
    let filter = {uid: req.params.uid};
    let query = {
        name : req.appData.name,
        mobileNo : req.appData.mobileNo,
        houseNo : req.appData.houseNo,
        area: req.appData.area,
        landMark: req.appData.landMark,
        pincode: req.appData.pincode,
        city: req.appData.city,
        state: req.appData.state,
        country: req.appData.country,
        updateOn: new Date()
    }

    updateOne(res, address, filter, query);
}

module.exports = {
    addAddress,
    getAddress,
    getAddressById,
    deleteAddress,
    updateAddress
}