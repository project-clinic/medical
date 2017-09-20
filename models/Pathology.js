const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const pathologySchema = new Schema ({
  name: String,
  patientId: { type: Schema.Types.ObjectId, ref:'User' },
  status: {
    type: String,
    enum: ['latent', 'desease', 'remit', 'cured']
  }
})
pathologySchema.set('timestamps', true)

module.exports = mongoose.model('Pathology', pathologySchema)