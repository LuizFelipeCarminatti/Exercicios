const express = require('express')
const { Router } = express
const homeController = require('../controllers/homeController')

const router = new Router()

router.get('/', homeController.index)

module.exports = router