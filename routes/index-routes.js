const router = require('express').Router()
const IndexController = require('../controllers/IndexController')

const authRoutes = require('./auth-routes')
const doctorRoutes = require('./doctor-routes')
const patientRoutes = require('./patient-routes')
const reportRoutes = require('./report-routes')

router.get('/', IndexController.index)
router.use('/', authRoutes)
router.use('/', doctorRoutes)
router.use('/', patientRoutes)
router.use('/', reportRoutes)


module.exports = router
