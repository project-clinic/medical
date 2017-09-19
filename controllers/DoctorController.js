const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
  listDoctorGet: (req, res) => { res.render('doctor/doctor-list', {
    title: 'Doctors list' }
  )},

  newDoctorGet: (req, res, next) => { res.render('doctor/new-doctor', {
    title: 'Add a new doctor' }
  )},

  newDoctorPost: (req, res, next) => {
    const email = req.body.email

    User.findOne({ email }, (err, user) => {
      if(err) { return next(err) }
      if(user) {
        res.render('doctor/new-doctor', {
          title: 'Add a new doctor',
          errorMessage: 'Email already exist'
        })
      }
      else {
        const {
          name, surname, email, password, collegiate, speciality
        } = req.body

        const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
        const newUser = new User({
          name, surname, email, collegiate,
          professional: {
            speciality
          },
          password: hashPass,
          role: 'Doctor'
        })

        newUser.save()
          .then(() => next(null, newUser))
          .catch(err => next(err))
      }
    })
  }
}
