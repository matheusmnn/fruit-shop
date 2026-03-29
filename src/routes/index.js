const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/teste', ProductController.testar)

router.post('/products', ProductController.store)

router.get('/products', ProductController.index);

module.exports = router