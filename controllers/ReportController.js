const User = require('../models/User')
const History = require('../models/History')
const Pathology = require('../models/Pathology')
const Report = require('../models/Report')

module.exports = {
  newReportGet: (req, res) => { res.render('report/new-report', {
    title: 'New report' })
  }
}
