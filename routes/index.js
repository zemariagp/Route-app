const express = require('express');
const router  = express.Router();
const app = require('../app');
const axios = require('axios');
const Favorite = require('../models/Favorite');
/*
const zomatoAPI = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1/',
  headers: { 'user-key': process.env.ZOMATO_KEY }
});
*/

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
// router.get('/private', (req, res) => {
//   res.render('private');
// });



router.get("/route-search", (req, res) => {
  const markers = [
    { lat: 38.7129146, lng: -9.1286218 },
    { lat: 38.7117206, lng: -9.1264315 },
    { lat: 38.7123872, lng: -9.1287935}
  ];
  let markersString = JSON.stringify(markers);
  Favorite.find()
  .then((allFavoritesFromDB) => {
    //console.log(allFavoritesFromDB)
    res.render("route-result", {markers: markersString, favorites: allFavoritesFromDB})
  });
})

router.post('/route-search', (req, res, next) => {
  let {favoriteName, start, end} = req.body;
  Favorite.create({
    favoriteName, 
    start, 
    end
  }).then(() => {
    res.redirect("/route-search")
  }).catch((err) => {
    res.render("error", {err});
  })
});

router.post("/route-search/:favoriteId", (req, res) => {
  let favoriteId = req.params.favoriteId;
  Favorite.findByIdAndDelete(favoriteId)
  
  .then(() => {
    console.log(favoriteId)
    res.redirect("/route-search")
  }).catch((err) => {
    res.render("error", {err});
  })
})


module.exports = router;
