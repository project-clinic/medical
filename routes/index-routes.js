const router = require('express').Router()
const { ensureLoggedIn } = require('connect-ensure-login')
const IndexController = require('../controllers/IndexController')
const check = require('../middlewares/check-role')

const authRoutes = require('./auth-routes')
const doctorRoutes = require('./doctor-routes')
const patientRoutes = require('./patient-routes')
const reportRoutes = require('./report-routes')

router.get('/', IndexController.index)
router.use('/', authRoutes)
router.use('/', ensureLoggedIn(), check.isAdmin(), doctorRoutes)
router.use('/', ensureLoggedIn(), check.isDoctor(), patientRoutes)
router.use('/', ensureLoggedIn(), check.isDoctor(), reportRoutes)


module.exports = router
