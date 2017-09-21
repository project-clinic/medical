const router = require('express').Router()
const DoctorController = require('../controllers/DoctorController')
const DeleteController = require('../controllers/DeleteController')

router.get('/doctors', DoctorController.listDoctorGet)

router.get('/doctor/new', DoctorController.newDoctorGet)
router.post('/doctor/new', DoctorController.newDoctorPost)

router.get('/doctor/:id/edit', DoctorController.editDoctorGet)
router.post('/doctor/:id/edit', DoctorController.editDoctorPost)

router.get('/:id/delete', DeleteController.deleteUser)


module.exports = router
