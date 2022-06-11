 const router = require('express').Router();
const {  addTreeDetils,
    getTreeDetails,
    getTreesById,
    deleteTreesByID,
    updateTreeData,
    getordersByTreetName } = require('./../services/trees.service');
const { requestCheck } = require('./../middleware/request.middleware');




router.post('/addTreeDetils', requestCheck, addTreeDetils);
router.get('/getTreeDetails', requestCheck, getTreeDetails);
router.get('/getTreesById/:treeId', requestCheck, getTreesById);
router.get('/deleteTreesByID/:treeId', requestCheck, deleteTreesByID);
router.post('/updateTreeData/:treeId', requestCheck, updateTreeData);
// router.get('/getordersByProductName/:productName', requestCheck, getordersByProductName);


module.exports = router;