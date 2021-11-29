const router = require('express').Router();
const { requestCheck } = require('../../middleware/request.middleware');

const {
    addUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser
} = require('../../services/users/users.service');

router.post('/addUser', requestCheck, addUser);
router.get('/getAllUsers', requestCheck, getAllUsers);
router.get('/getUser/:uid', requestCheck, getUser);
router.get('/deleteUser/:uid', requestCheck, deleteUser);
router.post('/updateUser', requestCheck, updateUser);

module.exports = router;