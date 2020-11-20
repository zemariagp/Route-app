const Streetart = require('../models/Streetart')
const express = require('express');
const router  = express.Router();
const app = require('../app');
const fileUpload = require('../configs/cloudinary')


router.get('/api/all', (req, res) => {
  Streetart.find().then(resultsDB => {
    let results = [];
    resultsDB.forEach((result) => {
      results.push({lat: result.latitude, lng: result.longitude, address:result.address,artist:result.artist, name_description:result.name_description, imageUrl:result.imageUrl, comment:result.comment, id: result._id})
    })
    res.json({results});
  })
})

router.post('/streetart/create', fileUpload.single('image'), (req, res) => {
  const { title, description } = req.body;
  let fileUrlOnCloudinary = req.file.path;
  Streetart.create({
    title,
    description,
    imageUrl: fileUrlOnCloudinary
  }).then(() => {
    res.redirect('/streetart');
  })
})

module.exports = router;
