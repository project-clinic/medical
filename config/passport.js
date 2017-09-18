const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = function() {
  passport.serializeUser((user, cb) => { cb(null, user.id) })

  passport.deserializeUser((id, cb) => {
    User.findById(id, (err, user) => {
      if (err) { return cb(err) }
      cb(null, user);
    });
  })

  // passport.use('local-signup', new LocalStrategy({ passReqToCallback: true }, 
  //   (req, email, password, next) => { process.nextTick(() => {
  //     User.findOne({'email': email}, (err, user) => {
  //       if (err) { return next(err) }
  //       if (user) { return next(null, false) } 
  //       else {
  //         const { email, password } = req.body
  //         const hashPass = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
  //         const newUser = new User({
  //           email,
  //           password: hashPass
  //         })

  //         newUser.save((err) => {
  //           if (err) { return next(err) }
  //           return next(null, newUser)
  //         })
  //       }
  //     })
  //   })
  // }))

  passport.use('local-login', new LocalStrategy((req, res, next) => {
    const email = req.body.email
    const password = req.body.password    
    console.log('hola')

    User.findOne({ email }, (err, user) => {
      if (err) { return next(err) }
      if (!user) { return next(null, false, { message: "Incorrect email" })}
      if (!bcrypt.compareSync(password, user.password)) {
        return next(null, false, { message: "Incorrect password" })
      }
      return next(null, user);
    })
  }))
}

module.exports = passport