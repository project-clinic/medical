const User = require('../models/User')
const Report = require('../models/Report')
const Pathology = require('../models/Pathology')
const bcrypt = require('bcrypt')

module.exports = {
  listPatientGet: (req, res) => {
    User.find({ 'role': 'Patient'})
      .then(patient => { res.render('patient/patient-list', {
        title: 'Patients',
        patients: patient })
      })
      .catch(err => next(err))
  },

  newPatientGet: (req, res, next) => { res.render('patient/new-patient', {
    title: 'Add a new patient'})
  },

  newPatientPost: (req, res, next) => {
    const idCard = req.body.idCard

    let height = req.body.height
    height = parseFloat(height).toFixed(2)

    let weight = req.body.weight
    weight = parseFloat(weight).toFixed(2)

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
          name, surname, email, idCard, background, notes,
          address, phone, birthday, gender, height, weight
        } = req.body

        const newUser = new User({
          name, surname, email, idCard, background, notes,
          contact: { address, phone },
          personaldata: {
            birthday, gender, height, weight
          },
          role: 'Patient'
        })
        newUser.save()
          .then(() => res.redirect('/patients'))
          .catch(err => next(err))
      }
    })
  },

  historyGet: (req, res, next) => {
    const thisYear = new Date().getFullYear()
    let age
    const patientId = req.params.id
    Report.find({}).sort({ 'updatedAt': -1 })
    .then( reports => {
      Pathology.find({ 'patientId':patientId }).sort({ 'updatedAt': -1 })
      .then( pathos => {
        User.findById(patientId)
        .then( patient => {
          if(patient.personaldata.birthday !== null) {
            const birth = patient.personaldata.birthday.getFullYear()
            if(typeof(birth) === 'number') { age = thisYear - birth }
          }
          res.render('patient/history', { title: 'History', patient, pathos, reports, age })
        })
      })
    })
  },

  editPatientGet: (req, res, next) => {
    const patientId = req.params.id

    User.findById(patientId)
      .then(user => {
        res.render('patient/edit-patient', {
          title: 'Edit patient',
          user: user
        })
      })
      .catch(err => next(err))
  },

  editPatientPost: (req, res, next) => {
    const patientId = req.params.id

    const {
      name, surname, email, address, phone, notes, birthday, gender, 
      height, weight, background
    } = req.body

    const updates = { name, surname, email, notes, background,
      contact: { address, phone },
      personaldata: { birthday, gender, height, weight }
    }

    User.findByIdAndUpdate(patientId, updates)
    .then(user => {
      return res.redirect(`/${patientId}/history`)
    })
    .catch(err => next(err))
  }
}