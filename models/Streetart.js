const mongoose = require ('mongoose');
const { Schema, model } = mongoose;

const streetartSchema = new Schema (
  {
    neighborhood: String, 
    address: String, 
    cross_street_1: String,
    cross_street_2: String,
    artist: String,
    name_description: String,
    other_location_note: String,
    latitude: Number,
    longitude: Number,
    type: String,
    imageUrl: String,
    reviews: [
      {
        user: String,
        comment: String
      }
    ],
    isDeleted: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true // to record created at & updated at 
  }
)
module.exports = model('Streetart', streetartSchema);