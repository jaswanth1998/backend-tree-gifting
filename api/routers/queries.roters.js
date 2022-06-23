const router = require('express').Router();

const { requestCheck } = require('./../middleware/request.middleware');
const {
    addQuerie,
    getQuerie,
    getOrderByQuery,
    deleteQueryById,
    updateQuery
} = require('./../services/queries.service')

router.post('/addQuerie',requestCheck,addQuerie)
router.get('/getQuerie',requestCheck,getQuerie)
router.get('/getOrderByQuery',requestCheck,getOrderByQuery)
router.get('/deleteQueryById/:queryId',requestCheck,deleteQueryById)
router.post('/updateQuery/:queryId',requestCheck,updateQuery)

module.exports = router;