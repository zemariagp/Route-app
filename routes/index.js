const express = require('express');
const router  = express.Router();
const app = require('../app');

//middleware we create:
function requireLogin(req, res, next) {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect('/login');
  }
}

/* GET home page */
router.get('/', (req, res, next) => {
  req.app.locals.loggedUser = req.session.currentUser;
  res.render('index', {user: req.session.currentUser});
  // res.render('index', { user: req.app.locals.loggedUser });
});
//we want to keep the private page, private. for real.
router.get('/private', (req, res) => {
  res.render('private');
});


module.exports = router;
