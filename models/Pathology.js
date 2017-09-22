const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const pathologySchema = new Schema ({
  name: { type: String, required:true },
  patientId: { type: Schema.Types.ObjectId, ref:'User', required:true },
  status: {
    type: String,
    enum: ['latent', 'desease', 'remit', 'cured']
  },
  reportsCount: {
    type: Number,
    default: 1
  }
})
pathologySchema.set('timestamps', true)

module.exports = mongoose.model('Pathology', pathologySchema)