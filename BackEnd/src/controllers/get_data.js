const fruits_collection = require("../../database/fruits.schema");
const get_data = async (req, res) => {
  const fruits_collection_data = await fruits_collection.find({});

  res.send({
    status: 200,
    msg: "success",
    data: fruits_collection_data,
  });
};
module.exports = get_data;
