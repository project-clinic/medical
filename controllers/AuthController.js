const User = require('../models/User')

module.exports = {
  loginGet: (req, res) => { res.render('auth/login', {title: 'Log in'}) },

  loginPost: (req, res, next) => {
    req.session.currentUser = req.user
    if(req.user.role === 'Admin') { res.redirect('/doctors') }
    else { res.redirect('/patients') }
  },

  logoutPost: (req, res, next) => {
    req.logout()
    res.redirect('/login')
  }
}
