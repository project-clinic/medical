const router = require('express').Router()
const { ensureLoggedIn } = require('connect-ensure-login')
const PatientController = require('../controllers/PatientController')
const check = require('../middlewares/check-role')

router.get('/patients', ensureLoggedIn('/login'), check.isDoctor(), PatientController.listPatientGet)
router.get('/patient/new', ensureLoggedIn('/login'), check.isDoctor(), PatientController.newPatientGet)
router.post('/patient/new', ensureLoggedIn('/login'), check.isDoctor(), PatientController.newPatientPost)


module.exports = router
