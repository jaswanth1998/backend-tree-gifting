const router = require("express").Router();

const Hospitals = require("./api/routers/hospitals/hospitals.router");
const Users = require('./api/routers/users/users.router');
const Address = require('./api/routers/users/address.router');

router.use('/hospitals',Hospitals)
router.use('/users',Users)
router.use('/users', Address)

module.exports = router;