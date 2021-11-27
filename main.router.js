const router = require("express").Router();

const Hospitals = require("./api/routers/hospitals/hospitals.router");

router.use('/hospitals',Hospitals)

module.exports = router;