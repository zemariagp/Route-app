const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const favoriteSchema = new Schema (
  {
    favoriteName: String,
    start: String,
    end: String
  },
  {
    timestamps: true
  }
)


module.exports = model("Favorite", favoriteSchema);