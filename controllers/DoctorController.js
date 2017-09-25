const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
  listDoctorGet: (req, res, next) => {
    User.find({ 'role': 'Doctor'})
      .then(doctor => { res.render('doctor/doctor-list', {
        title: 'Doctors',
        doctors: doctor })
      })
      .catch(err => next(err))

},

  newDoctorPost: (req, res, next) => {
    const idCard = req.body.idCard

    User.findOne({ idCard }, (err, user) => {
      if(err) { return next(err) }
      if(user) {
        res.render('doctor/doctor-list', {
          title: 'Add a new doctor',
          errorMessage: 'Id Card already exist'
        })
      }
      else {
        const {
          name, surname, idCard, password, collegiate, speciality
        } = req.body

        const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
        const newUser = new User({
          name, surname, idCard, 
          professional: {
            speciality,
            collegiate
          },
          password: hashPass,
          role: 'Doctor'
        })

        newUser.save()
          .then(() => res.redirect('/doctors'))
          .catch(err => next(err))
      }
    })
  },

  editDoctorPost: (req, res, next) => {
    const doctorId = req.params.id

    const {
      name, surname, email, speciality, collegiate
    } = req.body

    const updates = { name, surname, email,
      professional: { collegiate, speciality }
    }

    User.findByIdAndUpdate(doctorId, updates)
    .then(user => res.redirect('/doctors'))
    .catch(err => next(err))
  }
}
