const router = require('express').Router()
const { ensureLoggedIn } = require('connect-ensure-login')
const check = require('../middlewares/check-role')
const PatientController = require('../controllers/PatientController')

router.get('/patients', ensureLoggedIn(), check.isDoctor(), PatientController.listPatientGet)

router.get('/patient/new', ensureLoggedIn(), check.isDoctor(), PatientController.newPatientGet)
router.post('/patient/new', ensureLoggedIn(), check.isDoctor(), PatientController.newPatientPost)

router.get('/:id/history', ensureLoggedIn(), check.isDoctor(), PatientController.historyGet)

router.get('/patient/:id/edit', ensureLoggedIn(), check.isDoctor(), PatientController.editPatientGet)
router.post('/patient/:id/edit', ensureLoggedIn(), check.isDoctor(), PatientController.editPatientPost)

module.exports = router
