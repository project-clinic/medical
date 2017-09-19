const PATHS = require('../routes/paths')

module.exports = {
  isAdmin: () => {
    return (req, res, next) => {
      req.user.role === 'Admin' ? next() : res.redirect(PATHS.ROOT_PATH)
    }
  }
}
