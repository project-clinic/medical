const router = require('express').Router()
const IndexController = require('../controllers/IndexController')

const authRoutes = require('./auth-routes')

router.get('/', IndexController.index)

router.use('/', authRoutes)

module.exports = router