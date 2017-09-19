const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const upload = require('morgan')
const path = require('path')
const mongoose = require('mongoose')
const layout = require("express-ejs-layouts")
const rootPath = require('path').normalize(__dirname + '/../')
const session = require('../middlewares/session');
const passport = require('passport')
require('./passport')

module.exports = app => {
  app.set('views', rootPath + 'views')
  app.set('view engine', 'ejs')
  app.set('layout','layout')
  app.use(layout)
  app.use(upload('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(express.static(rootPath + 'public'))
  app.use(session(mongoose.connection))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use((req,res,next) => {
    res.locals.title = 'Patients Everywhere'
    next()
  })
}
