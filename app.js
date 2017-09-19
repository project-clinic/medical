const app = require('express')()

require('./config/express-connect')()
require('./config/express-app')(app)

const indexRoutes = require('./routes/index-routes')

app.use('/', indexRoutes)

require('./middlewares/error-handler')(app)

module.exports = app;
