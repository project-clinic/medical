const User = require('../models/User')
const PATHS = require('../routes/paths')

module.exports = {
  loginGet: (req, res) => { res.render('auth/login', {title: 'Log in'}) },

  loginPost: (req, res, next) => {
    if(req.user.role === 'Admin') { res.redirect(PATHS.ROOT_PATH) }
    else { res.redirect(PATHS.LOGIN_PATH) }
  }
}