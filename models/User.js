const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema ({
  name: String,
  surname: String,
  password: String,
  email: String,
  role: {
    type: String,
    enum: ['Admin', 'Doctor', 'Patient'],
    default: 'Patient'
  },
  contact: {
    address: String,
    phone: Number,
  },
  personaldata: {
    birthday: Date,
    gender: {
      type: String,
      enum: ['Female', 'Male'],
      default: 'Female'
    },
    height: Number,
    weight: Number
  },
  background: String,
  history: {
    type: Boolean,
    default: false
  }
})

userSchema.set('timestamps', true)

const User = mongoose.model('User', userSchema)

module.exports = User