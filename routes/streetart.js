const express = require('express');
const router  = express.Router();
const Streetart = require('../models/Streetart')
//Route to render streetart list view
router.get('/streetarts', (req, res) => {
  //Get streetart from Mongo and pass them to the view
  Streetart.find({ isDeleted: false })
//    .populate('author')
    .then((allTheStreetartFromDB) => {
      res.render('streetarts-list', { streetarts: allTheStreetartFromDB});
    })
    .catch((err) => {
      res.render('error', { err });
    })
});

//This route only has one purpose, which is
//render the streetart-create view
router.get('/streetarts/create', (req, res) => {
  //find all the authors and send them to the view
  //Author.find()
  //  .then((authorsFromDB) => {
      res.render('streetart-create');
      //res.render('streetart-create', { stre: authorsFromDB});
    })
//});
router.post('/streetarts/create', (req, res) => {
 /* let title = req.body.title;
  let author = req.body.author;
  let description = req.body.description;
  let rating = req.body.rating;*/
  let { artist, name_description, latitude, longitude, imageUrl, comment } = req.body;
  streetart.create({
    artist, 
    name_description,
    latitude,
    longitude,
    imageUrl,
    comment
  }).then(() => {
    res.redirect('/streetarts');
  });
});
//GET I'm sending a response with a view
router.get('/streetarts/:streetartId/edit', (req, res) => {
  let streetartId = req.params.streetartId;
  streetart.findById(streetartId)
    //.populate('author')
    .then((thestreetartFound) => {
      //found the streetart
      //Author.find()
        //.then((authorsFromDB) => {
          res.render('streetart-edit', 
          { 
            streetart: thestreetartFound, 
            //authors: authorsFromDB
          });
        })
    })
    // .catch((err) => {
    //   res.render('error', { err });
    // })
//});
//POST I'm persisting the changes on the database
router.post('/streetarts/:streetartId/edit', (req, res) => {
  let streetartId = req.params.streetartId;
  let { artist, name_description, latitude, longitude, imageUrl, comment } = req.body;
  streetart.findByIdAndUpdate(streetartId, {
    artist,
    name_description,
    latitude,
    longitude,
    imageUrl,
    comment
  }).then((updatedstreetart) => {
    res.redirect(`/streetarts/${streetartId}`);
  });
});
router.post('/streetarts/:streetartId/delete', (req, res) => {
  let streetartId = req.params.streetartId;
  //Hard delete
/*  streetart.findByIdAndDelete(streetartId)
    .then(() => {
      res.redirect('/streetarts');
    });*/
  //Soft delete
  streetart.findByIdAndUpdate(streetartId, {
    isDeleted: true
  }).then(() => {
    res.redirect('/streetarts');
  });
});

module.exports = router;