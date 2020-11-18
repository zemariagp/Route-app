const Streetart = require('../models/Streetart')
const express = require('express');
const router  = express.Router();
const app = require('../app');

router.get('/api/streetart', (req, res) => {
  Streetart.find().then(resultsDB => {
    let results = [];
    resultsDB.forEach((result) => {
      results.push({artist:result.artist, name_description:result.name_description, imageUrl:result.imageUrl, comment:result.comment})
    })
    res.json({results});
  })
})

module.exports = router;
