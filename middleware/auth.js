module.exports = {
    ensureAuth: function (req, res, next) {
      // If the user is authenticated continue ahead, if not redirect back to the homepage
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/')
      }
    }
  }
  