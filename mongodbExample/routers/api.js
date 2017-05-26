var express = require("express");
var router = express.Router();
var peopleService = require("../services/peopleService");

router.get("/people", function(req, res){
  peopleService.getPeople()
  .then(function(people) {
    res.json(people);
  })
})

router.get("/people/:id", function (req, res) {
  peopleService.getPerson(req.params.id)
  .then(function(person) {
    res.json(person);
  })
})

router.post("/people", function (req, res) {
  var body = req.body;
  peopleService.addProblem(body)
  .then(function (person) {
    res.json(person);
  }, function(err) {
    console.log(err);
    res.status(500).send("some errors happened: " + err);
  })
})

module.exports = router;
