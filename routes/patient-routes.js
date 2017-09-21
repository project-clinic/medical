const router = require('express').Router()
const PatientController = require('../controllers/PatientController')

router.get('/patients', PatientController.listPatientGet)

router.get('/patient/new', PatientController.newPatientGet)
router.post('/patient/new', PatientController.newPatientPost)

router.get('/:id/history', PatientController.historyGet)

router.get('/patient/:id/edit', PatientController.editPatientGet)
router.post('/patient/:id/edit', PatientController.editPatientPost)

module.exports = router
