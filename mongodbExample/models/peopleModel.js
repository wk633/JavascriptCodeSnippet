var mongoose = require("mongoose");

var peopleSchema = mongoose.Schema({
  id: Number,
  name: String,
  gender: String
});

var peopleModel = mongoose.model("PeopleModel", peopleSchema);

module.exports = peopleModel;
