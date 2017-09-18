const router = require('express').Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const AuthController = require('../controllers/AuthController')
const passport = require('../config/passport')
const PATHS = require('./paths')

router.get(PATHS.LOGIN_PATH, ensureLoggedOut(), AuthController.loginGet)
router.post(PATHS.LOGIN_PATH, ensureLoggedOut(), passport.authenticate('local-login', {
  successRedirect : PATHS.ROOT_PATH,
  failureRedirect : PATHS.LOGIN_PATH
}))

module.exports = router