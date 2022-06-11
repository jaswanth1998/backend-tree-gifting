const router = require("express").Router();
const Users = require('./api/routers/users/users.router');
const trees = require('./api/routers/trees.router')
const ngo = require('./api/routers/ngo.router')
const events = require('./api/routers/events.router')
const ecards = require('./api/routers/ecards.router')
router.use('/users',Users)
// router.use('/users', Address)
router.use('/trees',trees)
router.use('/ngo',ngo)
router.use('/events',events)
router.use('/ecards',ecards)
module.exports = router;