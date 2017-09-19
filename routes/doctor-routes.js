const router = require('express').Router()
const { ensureLoggedIn } = require('connect-ensure-login')
const DoctorController = require('../controllers/DoctorController')
const check = require('../middlewares/check-role')

router.get('/doctors', ensureLoggedIn('/login'), check.isAdmin(),  DoctorController.listDoctorGet)
router.get('/doctor/new', ensureLoggedIn('/login'), DoctorController.newDoctorGet)
router.post('/doctor/new', ensureLoggedIn('/login'), DoctorController.newDoctorPost)


module.exports = router
