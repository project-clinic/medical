const router = require('express').Router()
const AuthController = require('../controllers/AuthController')

const authRoutes = require('./auth-routes')
const doctorRoutes = require('./doctor-routes')
const patientRoutes = require('./patient-routes')
const reportRoutes = require('./report-routes')

router.get('/', AuthController.loginGet)
router.use('/', authRoutes)
router.use('/', doctorRoutes)
router.use('/', patientRoutes)
router.use('/', reportRoutes)


module.exports = router
