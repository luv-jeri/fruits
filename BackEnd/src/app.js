const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
//! Controllers
const add_data = require("../src/controllers/add_date");
const get_data = require("../src/controllers/get_data");

//` URL to the database
var url = "mongodb://localhost:27017/";

//` Creating connection to the database
mongoose.connect(url, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
});

//` Connection object
const conn = mongoose.connection;
if (conn) {
  console.log("Connected to database Hhurray ");
} else {
  console.log("cannot access database");
}

//~ middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

//! REST API
app.get("/", (req, res) => {
  console.log("req", req);
  res.send("Hello to My Project");
});

app.post("/add_data", add_data);
app.get("/get_data", get_data);

//S Export  server
module.exports = app;
