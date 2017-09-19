const router = require('express').Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const PatientController = require('../controllers/PatientController')

router.get('/patients', PatientController.listPatientGet)

module.exports = router
