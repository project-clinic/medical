const router = require('express').Router()
const passport = require('passport')
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const AuthController = require('../controllers/AuthController')
const PATHS = require('./paths')

router.get(PATHS.LOGIN_PATH, ensureLoggedOut(), AuthController.loginGet)
router.post(PATHS.LOGIN_PATH, ensureLoggedOut(), 
  passport.authenticate('local-login'), AuthController.loginPost)

module.exports = router