const router = require('express').Router()
const { ensureLoggedIn } = require('connect-ensure-login')
const check = require('../middlewares/check-role')
const DoctorController = require('../controllers/DoctorController')
const DeleteController = require('../controllers/DeleteController')

router.get('/doctors', ensureLoggedIn(), check.isAdmin(), DoctorController.listDoctorGet)

router.get('/doctor/new', ensureLoggedIn(), check.isAdmin(), DoctorController.newDoctorGet)
router.post('/doctor/new', ensureLoggedIn(), check.isAdmin(), DoctorController.newDoctorPost)

router.get('/doctor/:id/edit', ensureLoggedIn(), check.isAdmin(), DoctorController.editDoctorGet)
router.post('/doctor/:id/edit', ensureLoggedIn(), check.isAdmin(), DoctorController.editDoctorPost)

router.get('/:id/delete', ensureLoggedIn(), check.isAdmin(), DeleteController.deleteUser)


module.exports = router
