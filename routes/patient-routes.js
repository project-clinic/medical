const router = require('express').Router()
const { ensureLoggedIn } = require('connect-ensure-login')
const PatientController = require('../controllers/PatientController')

router.get('/patients', ensureLoggedIn(), PatientController.listPatientGet)
router.get('/patient/new', PatientController.newPatientGet)
router.post('/patient/new', PatientController.newPatientPost)


module.exports = router
