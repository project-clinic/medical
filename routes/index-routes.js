const router = require('express').Router()
const IndexController = require('../controllers/IndexController')
const DeleteController = require('../controllers/DeleteController')

const authRoutes = require('./auth-routes')
const doctorRoutes = require('./doctor-routes')
const patientRoutes = require('./patient-routes')
const reportRoutes = require('./report-routes')


router.get('/', IndexController.index)
router.get('/:id/delete', DeleteController.deleteUser)

router.use('/', authRoutes)
router.use('/', doctorRoutes)
router.use('/', patientRoutes)
router.use('/', reportRoutes)

module.exports = router
