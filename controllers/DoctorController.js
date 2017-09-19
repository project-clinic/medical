const User = require('../models/User')

module.exports = {
  listDoctorGet: (req, res) => { res.render('doctor/doctor-list') },
  newDoctorGet: (req, res, next) => {},
  newDoctorPost: (req, res, next) => {}
}
