const mongoose = require("mongoose");

// Storing the movie name
const MoviesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("movie", MoviesSchema);
