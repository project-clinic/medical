const User = require('../models/User')
const bcrypt = require('bcrypt')
const passport = require('passport')

module.exports = {
  loginGet: (req, res) => {

    res.render('auth/login', {title: 'Log in'})
  },

  loginPost: (req, res, next) => {
    passport.authenticate('local-login', (err, user, info) => {
      if (err) { return next(err); }
      if (!user) { return res.render('auth/login', {
        title: 'Log in',
        errorMessage: info.message })
      }
      req.logIn(user, function(err) {
        if (err) { return next(err) }
        req.session.currentUser = user
        if(user.role === 'Admin') { return res.redirect('/doctors') }
        else { return res.redirect('/patients') }
      });
    })(req, res, next)
  },

  logoutGet: (req, res, next) => {
    req.logout()
    res.redirect('/login')
  }
}
