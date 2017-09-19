const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const historySchema = new Schema ({
  patientId: { type: Schema.Types.ObjectId, ref:'User' },
  pathologies: [{ type:Schema.Types.ObjectId, ref:'Pathology' }]
})
historySchema.set('timestamps', true)

module.exports = mongoose.model('History', historySchema)