const express = require("express");
const Workout = require("../models/workout.js");

const router = express.Router()

router.post("/api/workouts", (req, res) => {
  Workout.create({}).then(dbWorkout => {
    res.json(dbWorkout);
  }).catch(err => {
    res.json(err);
  });
});

router.get("/api/workouts", (req, res) => {
  Workout.find().then(dbWorkouts => {
    res.json(dbWorkouts);
  }).catch(err => {
    res.json(err);
  });
});

module.exports = router;