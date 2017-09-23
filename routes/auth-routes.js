const router = require('express').Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const AuthController = require('../controllers/AuthController')

router.get('/login', ensureLoggedOut(), AuthController.loginGet)
router.post('/login', ensureLoggedOut(), AuthController.loginPost)

router.get('/logout', ensureLoggedIn(), AuthController.logoutGet)

module.exports = router
