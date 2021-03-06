const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema ({
  name: String,
  surname: String,
  idCard: String,
  password: String,
  email: String,
  role: {
    type: String,
    enum: ['Admin', 'Doctor', 'Patient']
  },
  contact: {
    address: String,
    phone: Number
  },
  professional: {
    collegiate: String,
    speciality: {
      type: String,
      enum: ['Cadiology', 'Geriatric', 'Neurology', 'Pediatric', 'Physical Medicine',
        'Psychiatry', 'Dentist', 'General Practice' ]
    }
  },
  personaldata: {
    birthday: Date,
    gender: {
      type: String,
      enum: ['Female', 'Male']
    },
    height: Number,
    weight: Number
  },
  background: String,
  notes: String
})
userSchema.set('timestamps', true)

module.exports = mongoose.model('User', userSchema)
