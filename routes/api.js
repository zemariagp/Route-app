const Streetart = require('../models/Streetart')
const express = require('express');
const router  = express.Router();
const app = require('../app');

router.get('/api/all', (req, res) => {
  Streetart.find().then(resultsDB => {
    let results = [];
    resultsDB.forEach((result) => {
      results.push({lat: result.latitude, lng: result.longitude, address:result.address,artist:result.artist, name_description:result.name_description, imageUrl:result.imageUrl, comment:result.comment})
    })
    res.json({results});
  })
})

module.exports = router;
