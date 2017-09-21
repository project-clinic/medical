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

  editUserPost: (req, res, next) => {
    const userId = req.params.id

    const {
      name, surname, email, speciality
    } = req.body

    const updates = { name, surname, email,
      professional: {speciality}
    }

    User.findByIdAndUpdate(userId, updates, (err, user) => {

      if (err){ return next(err); }
      return res.redirect(`/${userId}/history`);
    })
  }
}
