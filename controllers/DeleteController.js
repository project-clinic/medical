const User = require('../models/User')

module.exports = {
  deleteUser: (req, res, next) => {
    const userId = req.params.id
    console.log(req.user)

    User.findByIdAndRemove(userId, (err, user) => {
      if (err) {
        return next(err)
      }
      if(req.user.role === "Admin") {
        res.redirect('/doctors')
      } else {
        return res.redirect('/patients')
      }
    })
  }
}
