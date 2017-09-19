const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
  listPatientGet: (req, res) => { res.render('patient/patient-list', {
    title: 'Patient list' })
  }
}
