const router = require('express').Router()

const { requestCheck } = require('./../middleware/request.middleware');
const {
    searchTrees
} = require('../services/webapp/webapp.service')

router.get('/search',requestCheck,searchTrees);
module.exports = router; 