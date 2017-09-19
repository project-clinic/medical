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
    const idcard = req.body.idcard

    User.findOne({ idcard }, (err, user) => {
      if(err) { return next(err) }
      if(user) {
        res.render('doctor/new-doctor', {
          title: 'Add a new doctor',
          errorMessage: 'Id Card already exist'
        })
      }
      else {
        const {
          name, surname, idcard, password, collegiate, speciality
        } = req.body

        const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
        const newUser = new User({
          name, surname, idcard, collegiate,
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
