const express = require('express')
const router = express.Router()
const products = require('../controllers/products.controller')

/* GET users listing. */

router.get('/products/:type', products.getProducts)
router.get('/search-products/:searchquery', products.searchProducts)

module.exports = router
