const mongoose = require('mongoose')
const Pathology = require('../models/Pathology')
const User = require('../models/User')

mongoose.connect('mongodb://localhost/patients-everywhere')
  .then(() => console.log('connected to db!'))

User.find()
  .then(pat => {
    const pathologies = [
      {
        name: 'GRIPE',
        patientId: pat[0]._id,
        status: 'remit'
      },
      {
        name: 'TENDINITIS',
        patientId: pat[1]._id,
        status: 'remit'
      },
      {
        name: 'GRIPE',
        patientId: pat[1]._id,
        status: 'remit'
      },
      {
        name: 'BURSITIS',
        patientId: pat[2]._id,
        status: 'remit'
      }
    ]
    
    Pathology.create(pathologies, (err, docs) => {
      if(err) { throw err } 
      mongoose.connection.close()
    })
  })
  