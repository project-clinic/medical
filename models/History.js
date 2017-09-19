const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const historySchema = new Schema ({
  // patient
  // items:[{type:Schema.Types.ObjectId, ref:'Todo'}]
})

historySchema.set('timestamps', true)

const History = mongoose.model('History', historySchema)

module.exports = History