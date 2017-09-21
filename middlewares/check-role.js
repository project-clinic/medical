module.exports = {
  isAdmin: () => {
    return (req, res, next) => {
      req.user.role === 'Admin' ? next() : res.render('not-authorized')
    }
  },
  isDoctor: () => {
    return (req, res, next) => {
      console.log(req.user.role)
      req.user.role === 'Doctor' ? next() : res.render('not-authorized')
    }
  }
}
