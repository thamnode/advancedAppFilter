const mongoose = require("mongoose");

const bootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name to the bootcamp"],
    unique: true,
  },
  rating: {
    type: Number,
    required: [true, "Please provide a rating for the bootcamp"],
  },
  description: {
    type: String,
    required: [true, "Please provide bootcamp with a description"],
  },
  price: {
    type: Number,
    required: [true, "Please provide bootcamp with price"],
  },
});

const Bootcamp = mongoose.model("Bootcamp", bootcampSchema);

module.exports = Bootcamp;
