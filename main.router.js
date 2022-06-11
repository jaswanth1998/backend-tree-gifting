const router = require("express").Router();
const Users = require('./api/routers/users/users.router');
const trees = require('./api/routers/trees.router')

router.use('/users',Users)
// router.use('/users', Address)
router.use('/trees',trees)

module.exports = router;