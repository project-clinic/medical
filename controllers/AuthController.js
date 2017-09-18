const User = require('../models/User')

module.exports = {
  loginGet: (req, res) => { res.render('auth/login', {title: 'Log in'}) },

  loginPost: (req, res, next) => {
    
  }
}