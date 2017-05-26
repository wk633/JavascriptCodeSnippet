var express = require("express");
var app = express();
var apiRouters = require("./routers/api.js");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
mongoose.connect("mongodb://root:root@ds013202.mlab.com:13202/mydemodb");

app.use(bodyParser.json());
app.use("/api/v1", apiRouters);

app.listen(3000, function () {
  console.log("running at port 3000");
})
