const router = require('express').Router()
const AuthController = require('../controllers/AuthController')
const PATHS = require('./paths')

router.get(PATHS.LOGIN_PATH, AuthController.loginGet)

module.exports = router