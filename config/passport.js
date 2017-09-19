const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const bcrypt = require('bcrypt')


passport.serializeUser((user, cb) => { cb(null, user._id) })

passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    if (err) { return cb(err) }
    cb(null, user);
  });
})

passport.use('local-login', new LocalStrategy({
  usernameField: 'idCard'
  },
  (username, password, next) => {
    User.findOne({ 'idCard':username }, (err, user) => {
      if (err) { return next(err) }
      if (!user) { return next(null, false, { message: "Incorrect ID Card" })}
      if (!bcrypt.compareSync(password, user.password)) {
        return next(null, false, { message: "Incorrect password" })
      }
      return next(null, user);
    })
  }
))

module.exports = passport
