const User = require('../models/User')
const Pathology = require('../models/Pathology')
const Report = require('../models/Report')
const multer = require('multer')

module.exports = {
  newReportGet: (req, res) => { 
    User.findById(req.params.id)
    .then(user => {
      if(user == undefined) { 
        Pathology.findById(req.params.id).populate('patientId')
        .then(patho => {
          res.render('report/new-report', {
          title: 'New report',
          patient: patho.patientId,
          patho: patho.name
          })
        }) 
      }
      else { res.render('report/new-report', {
        title: 'New Report',
        patient: user,
        patho: undefined
      })}
    })
    .catch(err => next(err))
  },

  newReportPost: (req, res, next) => {
    const patientId = req.params.id
    const doctorId = req.user._id
    const {
      pathology, symptoms, consulty, treatment
    } = req.body

    let pathologyId = ''
    Pathology.findOne({ 'name':pathology, 'patientId': patientId })
    .then(patho => {
      if(patho == undefined) {
        new Pathology({ name: pathology, patientId: patientId })
        .save()
        .then(p => { 
          pathologyId = p._id
          new Report({
            consultyWork: consulty, treatment, symptoms, pathologyId, doctorId,
            files: [{ 
              pic_path: `/uploads/${req.file.filename}`, 
              pic_name: req.file.filename 
            }]
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
            files: [{ 
              pic_path: `/uploads/${req.file.filename}`, 
              pic_name: req.file.filename 
            }]
          })
          .save()
          .then(() => res.redirect(`/${patientId}/history`))
          .catch(err => next(err))
        })
      }
    })
  }
}
