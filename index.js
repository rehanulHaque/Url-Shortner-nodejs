require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT;
const route = require("./router/router");

mongoose.connect("mongodb://localhost:27017/shorturl").then(() => {
    console.log("Database Connected");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(route);

app.listen(PORT, () => {
  console.log("Running");
});
