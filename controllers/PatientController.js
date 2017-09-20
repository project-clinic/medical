const User = require('../models/User')
const Report = require('../models/Report')
const bcrypt = require('bcrypt')

module.exports = {
  listPatientGet: (req, res) => {
    User.find({ 'role': 'Patient'})
      .then(patient => { res.render('patient/patient-list', {
        title: 'Patients list',
        patients: patient })
      })
      .catch(err => next(err))
},

  newPatientGet: (req, res, next) => { res.render('patient/new-patient', {
    title: 'Add a new patient'}
  )},

  newPatientPost: (req, res, next) => {
    const idCard = req.body.idCard

    User.findOne({ idCard }, (err, user) => {
      if(err) { return next(err) }
      if(user) {
        res.render('patient/new-patient', {
          title: 'Add a new patient',
          errorMessage: 'Id Card already exist'
        })
      }
      else {
        const {
          name, surname, email, idCard, background,
          address, phone, birthday, gender, height, weight
        } = req.body

        const newUser = new User({
          name, surname, email, idCard, background,
          contact: { address, phone },
          personaldata: {
            birthday, gender, height, weight
          }
        })
        newUser.save()
          .then(() => res.redirect('/patients'))
          .catch(err => next(err))
      }
    })
  },

  historyGet: (req, res, next) => { 
    const patientId = req.params.id
    const array = []
    Report.find({}).populate('pathologyId')
      .then(reports => {
        const pathosUser = []
        reports.map(r => r.pathologyId).forEach(patho => {
          const patId = patho.patientId
          if(patId == patientId) { pathosUser.push(patho) }
        })
        console.log(pathosUser)
        res.render('patient/history', {
          title: 'History',
          patient: patientId,
          pathos: pathosUser
        })
      })
  }
}
