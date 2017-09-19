const User = require('../models/User')

module.exports = {
  loginGet: (req, res) => { res.render('auth/login', {title: 'Log in'}) },

  loginPost: (req, res, next) => {
    if(req.user.role === 'Admin') { res.redirect('/') }
    else { res.redirect('/login') }
  }
}