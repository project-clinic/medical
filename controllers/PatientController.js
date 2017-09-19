const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
  listPatientGet: (req, res) => { res.render('patient/patient-list', {
    title: 'Patient list' }
  )},

  newPatientGet: (req, res, next) => { res.render('patient/new-patient', {
    title: 'Add a new patient'}
  )},

  newPatientPost: (req, res, next) => {
    
  }
}
