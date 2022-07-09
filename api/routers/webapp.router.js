const router = require('express').Router()

const { requestCheck } = require('./../middleware/request.middleware');
const {
    searchTrees,
    showRecommendation
} = require('../services/webapp/webapp.service')

router.get('/search',requestCheck,searchTrees);
router.get('/showRecommendation',requestCheck,showRecommendation)
module.exports = router; 