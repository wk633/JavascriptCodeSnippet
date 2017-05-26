var PeopleModel = require("../models/peopleModel");

var getPeople = function () {
  return new Promise(function(resolve, reject){
    PeopleModel.find({}, function(err, people){
      if (err) {
        reject(err);
      }else {
        resolve(people);
      }
    })
  })
}

var getPerson = function (id) {
  return new Promise(function(resolve, reject){
    PeopleModel.find({id: id}, function(err, person) {
      if (err) {
        reject(err);
      }else {
        resolve(person);
      }
    })
  })
}

var addProblem = function (person) {
  return new Promise(function(resolve, reject){
    PeopleModel.findOne({name: person.name}, function(err, personSearch) {
      if (err) {
        reject(err);
      }else {
        if(personSearch) {
          reject("already added");
        }else {
          PeopleModel.count({}, function(err, result) {
            if (err) {
              reject(err);
            }else {
              person.id = result + 1;
              var mongoObject = new PeopleModel(person);
              mongoObject.save();
              resolve(person);
            }
          })
        }
      }
    })
  })
}

module.exports = {
  addProblem: addProblem,
  getPeople: getPeople,
  getPerson: getPerson
}
