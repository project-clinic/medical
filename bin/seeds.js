const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const bcryptSalt = 10

mongoose.connect('mongodb://localhost/patients-everywhere')
  .then(() => console.log('connected to db!'))

const password = '1234'
const salt     = bcrypt.genSaltSync(bcryptSalt)
const hashPass = bcrypt.hashSync(password, salt)

const admin = [
  {
    name: 'PatientsEverywhere',
    password: hashPass,
    idCard: '12344',
    role: 'Admin'
  },
  {
    name: 'Manolo',
    password: hashPass,
    idCard: '12345',
    role: 'Doctor'
  },
  {
    name: 'Pepe',
    password: hashPass,
    idCard: '12346',
    role: 'Doctor'
  },
  {
    name: 'Juana',
    password: hashPass,
    idCard: '12347',
    role: 'Patient'
  },
  {
    name: 'Manolo',
    password: hashPass,
    idCard: '12348',
    role: 'Patient'
  },
  {
    name: 'Pepe',
    password: hashPass,
    idCard: '12349',
    role: 'Patient'
  },
  {
    name: 'Juana',
    password: hashPass,
    idCard: '12340',
    role: 'Doctor'
  }
]

User.create(admin, (err, docs) => {
  if(err) { throw err }
  mongoose.connection.close()
})
