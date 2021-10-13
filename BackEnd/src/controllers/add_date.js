//S Importing schema
const fruits_collection = require("../../database/fruits.schema");
const mongoose = require("mongoose");
const add_data = async (req, res) => {
  try {
    console.log(req.body);
    const new_document = await fruits_collection.create(req.body);
    res.send({
      status: 200,
      msg: "success",
      data: new_document,
    });
  } catch (error) {
    console.log("Error while processing", error);
    res.send({
      status: 400,
      msg: error.message,
    });
  }
};
module.exports = add_data;
