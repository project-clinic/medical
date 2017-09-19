const router = require('express').Router()
const { ensureLoggedIn } = require('connect-ensure-login')
const ReportController = require('../controllers/ReportController')

router.get('/report/new', ReportController.newReportGet)

module.exports = router