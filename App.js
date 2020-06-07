const express = require("express");
const expressHandlebars = require("express-handlebars");
const mongoose = require("mongoose");

const app = express();

const port = 5000;
app.listen(port, () => {
  console.log(`server is started on port number ${port}`);
});

app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/addtask", function (req, res) {
  res.render("addtask");
});
app.get("/showtask", function (req, res) {
  res.render("showtask");
});

const connectionUrl =
  "mongodb+srv://jinkal:jinkal123@cluster0-ckrih.mongodb.net/nodeJs_db?retryWrites=true&w=majority";

mongoose
  .connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));
