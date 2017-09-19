const router = require('express').Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login')
const DoctorController = require('../controllers/DoctorController')

router.get('/doctors', DoctorController.listDoctorGet)


module.exports = router
