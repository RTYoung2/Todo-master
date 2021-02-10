const express = require("express");
const bodyParser = require("body-parser");

const api = express();
// api.use = express.static(__dirname + "/public");
api.use(express.static(__dirname + "/public"));
api.use(bodyParser.json());

api.listen(3005, () => {
  console.log("API is running");
});

api.post("/add", () => {
  console.log(req.body);
  console.log("It Works");
});
