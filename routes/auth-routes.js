const router = require('express').Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const AuthController = require('../controllers/AuthController')

router.get('/', ensureLoggedOut(), AuthController.loginGet)
router.post('/login', ensureLoggedOut(), AuthController.loginPost)

router.post('/logout', ensureLoggedIn(), AuthController.logoutPost)

module.exports = router
