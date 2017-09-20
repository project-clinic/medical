const router = require('express').Router()
const { ensureLoggedIn } = require('connect-ensure-login')
const DoctorController = require('../controllers/DoctorController')
const check = require('../middlewares/check-role')

router.get('/doctors', DoctorController.listDoctorGet)
router.get('/doctor/new', DoctorController.newDoctorGet)
router.post('/doctor/new', DoctorController.newDoctorPost)


module.exports = router
