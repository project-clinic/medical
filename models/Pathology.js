const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const pathologySchema = new Schema ({
  name: String,
  historyId: { type: Schema.Types.ObjectId, ref:'User' },
  resports: [{ type: Schema.Types.ObjectId, ref:'Report' }]
})
pathologySchema.set('timestamps', true)

module.exports = mongoose.model('Pathology', pathologySchema)