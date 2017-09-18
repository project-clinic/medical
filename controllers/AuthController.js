const User = require('../models/User')
const bcrypt = require('bcrypt')
const bcryptSalt = 10

module.exports = {
  loginGet: (req, res, next) => { res.render('auth/login', {title: 'Log in'}) }
}