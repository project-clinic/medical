const router = require('express').Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const DoctorController = require('../controllers/DoctorController')

router.get('/doctors', DoctorController.listDoctorGet)
router.get('/doctor/new', DoctorController.newDoctorGet)

module.exports = router
