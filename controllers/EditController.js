const User = require('../models/User')

module.exports = {
  editUserGet: (req, res, next) => {
    const userId = req.params.id
    let role = 'Doctor'
    if((req, res) === 'Admin') { rol = 'Admin' }

    User.findById(userId)
      .then(user => {
        res.render('edit/edit-user', {
          title: 'Edit user',
          user: user
        })
      })
      .catch(err => next(err))
    },

  editUserPut: (req, res, next) => {
    const userId = req.params.id
    let role = 'Doctor'

    const updates = {
      name, surname, email, password, idCard, collegiate, speciality,
      address, phone, birthday, gender, height, weight, background
    } = req.body

    User.findByIdAndUpdate(userId, updates, (err, user) => {
      if (err){ return next(err); }
      return res.redirect(`/${userId}`);
    })
  }
}
