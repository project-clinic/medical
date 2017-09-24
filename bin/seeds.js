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
    email: 'manolo@manolo.com',
    idCard: '12345',
    professional: {
      collegiate: 'D3454656',
      speciality: 'Cardiology'
    },
    role: 'Doctor'
  },
  {
    name: 'Juana',
    idCard: '12340',
    email: 'juana@juana.com',
    personaldata: {
      gender: 'Female'
    }
    role: 'Patient'
  }
]

User.create(admin, (err, docs) => {
  if(err) { throw err }
  mongoose.connection.close()
})
