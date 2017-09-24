const User = require('../models/User')
const Pathology = require('../models/Pathology')
const Report = require('../models/Report')
const multer = require('multer')

module.exports = {
  newReportPost: (req, res, next) => {
    const patientId = req.params.id
    const doctorId = req.user._id
    const {
      pathology, symptoms, consulty, treatment
    } = req.body

    const arrayFiles = []
    req.files.forEach( elem => {
      const elemFiles = {
        pic_path: `/uploads/${elem.filename}`,
        pic_name: elem.originalname
      }
      arrayFiles.push(elemFiles) 
    })

    let pathologyId = ''
    Pathology.findOne({ 'name':pathology, 'patientId': patientId })
    .then(patho => {
      if(patho == undefined) {
        new Pathology({ name: pathology.toUpperCase(), patientId: patientId })
        .save()
        .then(p => { 
          pathologyId = p._id
          new Report({
            consultyWork: consulty, treatment, symptoms, pathologyId, doctorId,
            files: arrayFiles
          })
          .save()
          .then(() => res.redirect(`/${patientId}/history`))
        })
        .catch(err => next(err))

      } else {
        const reportsCount = patho.reportsCount + 1
        const countUpdate = { reportsCount }
        Pathology.findByIdAndUpdate(patho._id, countUpdate)
        .then(() => {
          new Report({
            consultyWork: consulty, treatment, symptoms, doctorId, 
            pathologyId: patho._id,
            files: arrayFiles
          })
          .save()
          .then(() => res.redirect(`/${patientId}/history`))
          .catch(err => next(err))
        })
      }
    })
  }
}
