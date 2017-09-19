const app = require('express')()

require('./config/express-connect')()
require('./config/express-app')(app)

const index = require('./routes/index')

app.use('/', index)

require('./middlewares/error-handler')(app)

module.exports = app;
