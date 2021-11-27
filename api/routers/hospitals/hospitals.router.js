const router = require("express").Router();
const { requestCheck } = require("../../middleware/request.middleware");

const {
    addHospital,
    getAllHospitals,
    getHospital
} = require('../../services/hospitals/hospitals.service')

router.post('/addHospital', requestCheck, addHospital)
router.get('/',requestCheck,getAllHospitals)
router.get('/:id',requestCheck,getHospital)


module.exports = router;
