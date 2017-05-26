var express = require("express");
var router = express.Router();

router.get("/people", function(req, res){
  console.log("/people");
})

router.get("/people/:id", function (req, res) {
  console.log("/people/:id");
})

router.post("/people", function (req, res) {
  var body = req.body;
  console.log(body);
  res.json(body);
})

module.exports = router;
