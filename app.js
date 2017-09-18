const app = require('express')()
const PATHS = require('./routes/paths')

require('./config/express-connect')()
require('./config/express-app')(app)

const index = require('./routes/index')

app.use(PATHS.ROOT_PATH, index)

require('./middlewares/error-handler')(app)

module.exports = app;
