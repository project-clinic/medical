const User = require('../models/User')
const History = require('../models/History')
const Pathology = require('../models/Pathology')
const Report = require('../models/Report')

module.exports = {
  newReportGet: (req, res) => { res.render('report/new-report', { 
    title: 'New report' })
  },
  
  newReportPost: (req, res, next) => {
    // const patientId = req.params.patientId
    // const pathologyId = req.params.pathologyId
    const doctorId = req.session.currentUser._id
    const {
      consultation, treatment
    } = req.body

    console.log(
      consultation
    )
    const newReport = new Report({
      doctorId, consultation, treatment
    })
    
    newReport.save()
      .then(() => next(null, newReport))
      .catch(err => next(err))

  }
}
