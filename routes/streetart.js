const express = require('express');
const router  = express.Router();
const Streetart = require('../models/Streetart')

//Route to render streetart list view
router.get('/streetarts', (req, res) => {
  //Get streetart from Mongo and pass them to the view
  Streetart.find({ isDeleted: false })
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
      res.render('streetarts-create');
    })

router.post('/streetarts/create', (req, res) => {
  let { artist, name_description, address, latitude, longitude, other_location_note, imageUrl, comment } = req.body;
  Streetart.create({
    artist, 
    name_description,
    address,
    latitude,
    longitude,
    other_location_note,
    imageUrl,
    comment
  }).then(() => {
    res.redirect('/streetarts');
  });
});

//GET I'm sending a response with a view
router.get('/streetarts/:streetartsId/edit', (req, res) => {
  let streetartsId = req.params.streetartsId;
  Streetart.findById(streetartsId)
    .then((theStreetartFound) => {
          res.render('streetarts-edit', 
          { 
            streetart: theStreetartFound, 
          });
        })
    })

//POST I'm persisting the changes on the database
router.post('/streetarts/:streetartsId/edit', (req, res) => {
  let streetartsId = req.params.streetartsId;
  let { artist, name_description, address, latitude, longitude, other_location_note, imageUrl, comment } = req.body;
  Streetart.findByIdAndUpdate(streetartsId, {
    artist,
    name_description,
    address,
    latitude,
    longitude,
    other_location_note,
    imageUrl,
    comment
  }).then((updatedStreetart) => {
    res.redirect(`/streetarts/${streetartsId}`);
  });
});

router.post('/streetarts/:streetartsId/delete', (req, res) => {
  let streetartsId = req.params.streetartsId;
  //Soft delete
  Streetart.findByIdAndUpdate(streetartsId, {
    isDeleted: true
  }).then(() => {
    res.redirect('/streetarts');
  });
});

//This is a route that recieves a route param
router.get('/streetarts/:streetartsId', (req, res) => {
  let streetartsId = req.params.streetartsId;
  Streetart.findById(streetartsId)
    .then((thestreetartFound) => {
      res.render('streetarts-details', { streetart: thestreetartFound});
    })
    .catch((err) => {
      res.render('error', { err });
    })
});

//Add reviews route
router.post('/reviews/:streetartsId/add', (req, res) => {
  let streetartsId = req.params.streetartsId;
  let { user, comment } = req.body;
  Streetart.findByIdAndUpdate(streetartsId, 
    { $push: { reviews: { user, comment }}})
    .then(()=> {
      res.redirect(`/streetarts/${streetartsId}`);
    })
});

module.exports = router;