const User = require('../models/User')
const Report = require('../models/Report')
const Pathology = require('../models/Pathology')
const bcrypt = require('bcrypt')
const _ = require('lodash/array')

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
    title: 'Add a new patient'})
  },

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
    Pathology.find({ 'patientId':patientId }).populate('patientId')
    .then(pathos => {
      User.find({ '_id':patientId })
      .then( pat => {
        const patient = pat[0]
        res.render('patient/history', { title: 'History', patient, pathos })
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
      name, surname, email, address, phone,
      birthday, gender, height, weight, background
    } = req.body

    const updates = { name, surname, email,
      contact: { address, phone },
      personaldata: { birthday, gender, height, weight },
      background
    }

    User.findByIdAndUpdate(patientId, updates, (err, user) => {
      if (err){ return next(err); }
      return res.redirect('/patients');
    })
  }
}
