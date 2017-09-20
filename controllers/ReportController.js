const multer = require('multer')
const User = require('../models/User')
const Pathology = require('../models/Pathology')
const Report = require('../models/Report')
const upload = multer({ dest: '../public/uploads/' })

module.exports = {
  newReportGet: (req, res) => { res.render('report/new-report', { 
    title: 'New report' })
  },
  
  newReportPost: (req, res, next) => {
    // const patientId = req.params.id
    // const doctorId = req.user._id
    const {
      pathology, symptoms, consulty, treatment
    } = req.body

    const patientId = '59c252558cc4943a667c3d84'
    let pathologyId = ''

    Pathology.findOne({ 'name':pathology, 'patientId': patientId }, (err, patho) => {
      if(err) { return next(err) }
      new Pathology({ name: pathology, patientId: patientId })
        .save()
        .then(p => pathologyId = p._id)
        .then(() => new Report({
            consultyWork: consulty, treatment, symptoms, pathologyId }
          )
          .save()
          .then(() => res.redirect('/report/new'))
        )
        .catch(err => next(err))
    })
  }
}
