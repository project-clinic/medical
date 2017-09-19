const router = require('express').Router()
const { ensureLoggedIn } = require('connect-ensure-login')
const PatientController = require('../controllers/PatientController')

router.get('/patients', ensureLoggedIn(), PatientController.listPatientGet)

module.exports = router
