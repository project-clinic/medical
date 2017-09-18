const router = require('express').Router()
const IndexController = require('../controllers/IndexController')
const PATHS = require('./paths')

const auth = require('./auth')

router.get(PATHS.ROOT_PATH, IndexController.index)

router.use(PATHS.ROOT_PATH, auth)

module.exports = router