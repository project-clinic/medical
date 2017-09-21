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

    const updates = {
      name
    } = req.body

    User.findByIdAndUpdate(userId, updates, (err, user) => {

      if (err){ return next(err); }
      return res.redirect(`/${userId}/history`);
    })
  }
}
