const Streetart = require('../models/Streetart')
const express = require('express');
const router  = express.Router();
const app = require('../app');

router.get('/api/streetart', (req, res) => {
  Streetart.find().then(resultsDB => {
    let results = [];
    resultsDB.forEach((result) => {
      results.push({lat: result.latitude, lng: result.longitude})
    })
    res.json({results});
  })
})


module.exports = router;
