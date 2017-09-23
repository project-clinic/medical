const router = require('express').Router()
const { ensureLoggedOut } = require('connect-ensure-login')
const AuthController = require('../controllers/AuthController')

const authRoutes = require('./auth-routes')
const doctorRoutes = require('./doctor-routes')
const patientRoutes = require('./patient-routes')
const reportRoutes = require('./report-routes')

router.get('/', ensureLoggedOut(), AuthController.loginGet)
router.use('/', authRoutes)
router.use('/', doctorRoutes)
router.use('/', patientRoutes)
router.use('/', reportRoutes)


module.exports = router
