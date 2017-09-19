const router = require('express').Router()
const { ensureLoggedIn } = require('connect-ensure-login')
const DoctorController = require('../controllers/DoctorController')
const check = require('../middlewares/check-role')

router.get('/doctors', ensureLoggedIn('/login'), check.isAdmin(),  DoctorController.listDoctorGet)
router.get('/doctor/new', ensureLoggedIn('/login'), check.isAdmin(), DoctorController.newDoctorGet)
router.post('/doctor/new', ensureLoggedIn('/login'), check.isAdmin(), DoctorController.newDoctorPost)


module.exports = router
