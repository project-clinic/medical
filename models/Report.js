const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const reportSchema = new Schema ({
  doctorId: { type: Schema.Types.ObjectId, ref:'User' },
  consultation: String,
  treatment: String,
  files: [{ 
    pic_path: String,
    pic_name: String
  }]
})
reportSchema.set('timestamps', true)

module.exports = mongoose.model('Report', reportSchema)