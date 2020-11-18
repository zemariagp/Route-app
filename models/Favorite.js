const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const favoriteSchema = new Schema (
  {
    origin: String,
    destination: String
  },
  {
    timestamps: true
  }
)


module.exports = model("Favorite", favoriteSchema);