const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const favoriteSchema = new Schema (
  {
    route: String,
    
  },
  {
    timestamps: true
  }
)


module.exports = model("Favorite", favoriteSchema);