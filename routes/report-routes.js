const router = require('express').Router()
const { ensureLoggedIn } = require('connect-ensure-login')
const ReportController = require('../controllers/ReportController')
const check = require('../middlewares/check-role')
const multer = require('multer')
const upload = multer({ dest: './public/uploads/' })

router.post('/:id/report/new', ensureLoggedIn(), check.isDoctor(), 
            upload.array('file', 3), ReportController.newReportPost)

module.exports = router