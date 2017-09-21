const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')
const passport = require('passport')

module.exports = app => {
  app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    })
  }))

  app.use(passport.initialize())
  app.use(passport.session())
  require('./passport')

  app.use((req, res, next) => {
    if(req.session.currentUser) { 
      res.locals.userLogged = req.session.currentUser
      res.locals.isLoggedIn = true
    } else { 
      res.locals.isLoggedIn = false
    }
    next()
  })
}