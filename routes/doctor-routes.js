const router = require('express').Router()
const { ensureLoggedIn } = require('connect-ensure-login')
const DoctorController = require('../controllers/DoctorController')
const DeleteController = require('../controllers/DeleteController')
const check = require('../middlewares/check-role')

router.get('/doctors', DoctorController.listDoctorGet)
router.get('/doctor/new', DoctorController.newDoctorGet)
router.post('/doctor/new', DoctorController.newDoctorPost)
router.get('/:id/delete', DeleteController.deleteUser)


module.exports = router
