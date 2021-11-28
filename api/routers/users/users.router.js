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
router.get('/getUser/:id', requestCheck, getUser);
router.get('/deleteUser/:id', requestCheck, deleteUser);
router.post('/updateUser', requestCheck, updateUser);

module.exports = router;