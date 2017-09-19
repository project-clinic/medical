const User = require('../models/User')

module.exports = {
  listDoctorGet: (req, res) => { res.render('doctor/doctor-list', {
    title: 'Doctors list' }
  )},
  newDoctorGet: (req, res, next) => { res.render('doctor/new-doctor', {
    title: 'Add a new doctor' }
  )},
  newDoctorPost: (req, res, next) => {}
}
