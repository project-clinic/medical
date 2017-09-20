const router = require('express').Router()
const { ensureLoggedIn } = require('connect-ensure-login')
const PatientController = require('../controllers/PatientController')
const check = require('../middlewares/check-role')

router.get('/patients', PatientController.listPatientGet)
router.get('/patient/new', PatientController.newPatientGet)
router.post('/patient/new', PatientController.newPatientPost)


module.exports = router
