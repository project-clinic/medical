const router = require('express').Router()
const { ensureLoggedIn } = require('connect-ensure-login')
const ReportController = require('../controllers/ReportController')
const check = require('../middlewares/check-role')

router.get('/:id/report/new', ReportController.newReportGet)
router.post('/:id/report/new', ReportController.newReportPost)

module.exports = router