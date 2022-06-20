const router = require("express").Router();
const trees = require('./api/routers/trees.router')
const ngo = require('./api/routers/ngo.router')
const events = require('./api/routers/events.router')
const ecards = require('./api/routers/ecards.router')
const orders = require('./api/routers/orders.router')
const locations = require('./api/routers/locations.router')
const Users = require('./api/routers/users.router')

// router.use('/users', Address)
router.use('/trees',trees)
router.use('/ngo',ngo)
router.use('/events',events)
router.use('/ecards',ecards)
router.use('/orders',orders)
router.use('/locations',locations)
router.use('/users',Users)
module.exports = router;