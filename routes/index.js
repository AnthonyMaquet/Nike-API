const express = require('express')
const router = express.Router()
const productsRouter = require('./products.route')

router.use(productsRouter)

router.use(function (user, req, res, next) {
  res.status(200).send(user)
})

module.exports = router
