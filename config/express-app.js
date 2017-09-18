const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const upload = require('morgan')
const path = require('path')
const mongoose = require('mongoose')
const layout = require("express-ejs-layouts")
const rootPath = require('path').normalize(__dirname + '/../')

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

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
  app.use(session({
    secret: process.env.SECRET_SESSION,
    cookie: { maxAge: 60000 },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 24 * 60 * 60 // 1 day
    })
  }))
  app.use((req,res,next) => {
    res.locals.title = 'Patients Everywhere'
    next()
  })
}