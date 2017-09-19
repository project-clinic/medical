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
          },
          history: true
        })

        newUser.save()
          .then(() => next(null, newUser))
          .catch(err => next(err))
      }
    })
  }
}
