var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencoded = bodyParser.urlencoded({
  extended: true
});

var people = [
  { id: 1,
    name: "No1",
    gender:"male",
  },
  { id: 2,
    name: "No2",
    gender:"male",
  },
  { id: 3,
    name: "No3",
    gender:"female",
  }
];

router.get("/people", function(req, res) {
  res.json(people);
})

router.get("/people/:id", function(req, res) {
  var id = req.params.id;
  res.json(people[id-1]);
})

router.post("/people", urlencoded, function(req, res){
  var body = req.body;
  var person = people.find((person) => person.name == body.name);
  console.log("person ", person);
  if(person) {
    res.json({
      error: "this name already exist"
    })
  }else {
    body.id = people.length + 1;
    people.push(body);
    res.json(people);
  }

})

module.exports = router;
