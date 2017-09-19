const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const bcryptSalt = 10

mongoose.connect('mongodb://localhost/patients-everywhere')
  .then(() => console.log('connected to db!'))

const password = '1234'
const salt     = bcrypt.genSaltSync(bcryptSalt)
const hashPass = bcrypt.hashSync(password, salt)

const admin = {
  name: 'PatientsEverywhere',
  password: hashPass,
  idCard: '1234',
  role: 'Admin'
}

User.create(admin, (err, docs) => {
  if(err) { throw err } 
  mongoose.connection.close()
})