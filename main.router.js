const router = require("express").Router();

const Hospitals = require("./api/routers/hospitals/hospitals.router");
const Users = require('./api/routers/users/users.router');

router.use('/hospitals',Hospitals)
router.use('/users',Users)

module.exports = router;