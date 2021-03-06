const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const upload = require('morgan')
const path = require('path')
const partial = require('express-partial')
const layout = require("express-ejs-layouts")
const rootPath = require('path').normalize(__dirname + '/../')

module.exports = app => {
  app.set('views', rootPath + 'views')
  app.set('view engine', 'ejs')
  app.set('layout','layout')
  app.use(partial())

  app.use(layout)
  app.use(upload('dev'))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(express.static(rootPath + 'public'))

  app.use((req,res,next) => {
    res.locals.title = 'Patients Everywhere'
    next()
  })
}
