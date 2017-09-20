const mongoose = require('mongoose')
const User = require('../models/User')

mongoose.connect('mongodb://localhost/patients-everywhere')
  .then(() => console.log('connected to db!'))


const patient = [
  {
  name: 'Lola',
  idCard: '12345678',
  role: 'Patient'
  },
  {
  name: 'Juan',
  idCard: '9238975',
  role: 'Patient'
  },
  {
  name: 'Raúl',
  idCard: '90098234',
  role: 'Patient'
  },
]

User.create(patient, (err, docs) => {
  if(err) { throw err } 
  mongoose.connection.close()
})