const {
    addData,
    getAllData,
    find,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
} = require('../../helpers/curd.helper');

//const { merchantData } = require('../../merchantData/merchant.schema');
const { merchantData } = require('../../models/products/merchant.schema');



const addMerchants = (req, res) => {
    const merchantdata = new merchantData(req.appData);
    addData(res, merchantdata);
}
const getMerchants = (req, res) => {
    getAllData(res,merchantData);
}

const getMerchantsById = (req, res) => {
    find(res, merchantData, {_id:req.params.merchantId});
}

const deleteMerchants= (req, res) => {
    deleteAll(res, merchantData, {_id:req.params.merchantId});
}

const updateMerchants = (req, res) => {
    let filter = {_id: req.params.merchantId};
    let query = {
        ...req.appData,
        updateOn: new Date()
    }

    updateOne(res, merchantData, filter, query);
}

const getMerchantsByPincode = (req, res) => {
    find(res, merchantData, {'merchantAddress.pincode':req.params.pincode});
}

module.exports = {
    addMerchants,
    getMerchants,
    getMerchantsById,
    deleteMerchants,
    updateMerchants,
    getMerchantsByPincode
}