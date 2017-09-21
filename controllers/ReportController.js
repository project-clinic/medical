const multer = require('multer')
const User = require('../models/User')
const Pathology = require('../models/Pathology')
const Report = require('../models/Report')
const upload = multer({ dest: '../public/uploads/' })

module.exports = {
  newReportGet: (req, res) => { 
    User.findById(req.params.id)
    res.render('report/new-report', { 
    title: 'New report',
    patientId: req.params.id,
    pathoId: undefined })
  },

  newReportPost: (req, res, next) => {
    const patientId = req.params.id
    const doctorId = req.user._id
    const {
      pathology, symptoms, consulty, treatment
    } = req.body

    let pathologyId = ''
    Pathology.findOne({ 'name':pathology, 'patientId': patientId }, (err, patho) => {
      if(err) { return next(err) }
      new Pathology({ name: pathology, patientId: patientId })
        .save()
        .then(p => pathologyId = p._id)
        .then(() => new Report({
           consultyWork: consulty, treatment, symptoms, pathologyId,
           doctorId }
        )
        .save()
        .then(() => res.redirect('/patients'))
        )
        .catch(err => next(err))
    })
  }
}
