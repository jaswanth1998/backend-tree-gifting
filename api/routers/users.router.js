const router = require('express').Router()
const {
    createUser,
    signIn,
    allUsers,
    deleteUser,
    updateUser
} = require('./../services/user.service')
const { requestCheck } = require('./../middleware/request.middleware');
router.post('/createUser',requestCheck,createUser)
router.post('/signIn',requestCheck, signIn)
router.get('/allUsers',requestCheck,allUsers)
router.post('/deleteUser',requestCheck,deleteUser)
router.post('/updateUser',requestCheck,updateUser)

module.exports = router; 