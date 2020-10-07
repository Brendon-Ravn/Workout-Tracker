const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutschema = new Schema({

});

const Workout = mongoose.model("Workout", workoutschema);

module.exports = Workout;
