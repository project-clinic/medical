const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

module.exports = (mongooseConnection) => (
  session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
    store: new MongoStore({
      mongooseConnection: mongooseConnection,
      ttl: 24 * 60 * 60 // 1 day
    })
  })
)