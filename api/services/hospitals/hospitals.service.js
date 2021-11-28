const { addData, 
    getAllData,
    find ,
    updateOne,
    updateAll,
    deleteOne,
    deleteAll
} = require('../../helpers/curd.helper');
const { hospital } = require('../../models/hospitals/hospitals.schema');


const addHospital = (req, res) => {
    const hospitalData = new hospital(req.appData);
    addData(res, hospitalData);
}
const getAllHospitals = (req, res) => {
    getAllData(res, hospital);
}
const getHospital = (req, res) => {
    deleteAll(res, hospital, { address: "added123" },{name:req.params.id});
}



module.exports = {
    addHospital,
    getAllHospitals,
    getHospital
}
