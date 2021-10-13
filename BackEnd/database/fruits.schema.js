const mongoose = require("mongoose");

const fruits_schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    URL: {
      type: String,
      required: [true, "Please provide a URL :)"],
    },
    price: {
      type: Number,
    },
  },

  {
    timestamps: true,
  }
);

//` Compound index

const fruits_collection = mongoose.model("fruits_collection", fruits_schema);

module.exports = fruits_collection; //?
