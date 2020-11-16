const express = require('express');
const router  = express.Router();
const app = require('../app');
const axios = require('axios');

const zomatoAPI = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1/',
  headers: { 'user-key': process.env.ZOMATO_KEY }
});

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

router.get("/zomato", (req, res) => {
  res.render("zomato");
})

router.get("/restaurant-search", (req, res) => {
  res.render("restaurants-result");
})

router.get("/zomato-results", (req, res) => {
  zomatoAPI.get(`establishments?city_id=82`)
  .then((response) => {
    console.log(response.data.establishments)
    let establishment = response.data.establishments;
    res.render("zomato-results", {establishment})
   
  }) 
} )

module.exports = router;
