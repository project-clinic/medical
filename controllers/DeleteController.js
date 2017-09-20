const User = require('../models/User')

module.exports = {
  deleteUser: (req, res) => {
    const userId = req.params.userId

    User.findByIdAndRemove(userId, (err, user) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/doctors');
    });
  }
}
