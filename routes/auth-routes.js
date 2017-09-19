const router = require('express').Router()
const passport = require('passport')
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const AuthController = require('../controllers/AuthController')

router.get('/login', ensureLoggedOut(), AuthController.loginGet)
router.post('/login', ensureLoggedOut(), 
  passport.authenticate('local-login'), AuthController.loginPost)

module.exports = router