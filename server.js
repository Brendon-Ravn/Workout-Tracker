const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const htmlRoutes = require("./routes/html-routes.js");
const apiRoutes = require("./routes/api-routes.js");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false });

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});