const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
  listDoctorGet: (req, res, next) => {
    User.find({ 'role': 'Doctor'})
      .then(doctor => { res.render('doctor/doctor-list', {
        title: 'Doctors list',
        doctors: doctor })
          console.log(doctor)
      })
      .catch(err => next(err))

},

  newDoctorGet: (req, res, next) => { res.render('doctor/new-doctor', {
    title: 'Add a new doctor' }
  )},

  newDoctorPost: (req, res, next) => {
    const idCard = req.body.idCard

    User.findOne({ idCard }, (err, user) => {
      if(err) { return next(err) }
      if(user) {
        res.render('doctor/new-doctor', {
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
          name, surname, idCard, collegiate,
          professional: {
            speciality
          },
          password: hashPass,
          role: 'Doctor'
        })

        newUser.save()
          .then(() => res.redirect('/doctors'))
          .catch(err => next(err))
      }
    })
  }
}
