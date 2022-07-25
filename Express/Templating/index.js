const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 100) + 1;
  res.render("random", { randNum: num });
  // res.render("random", { num }); // -> num:num 과 동일.
});

app.listen(3000, () => {
  console.log("Listening on Port : 3000");
});
