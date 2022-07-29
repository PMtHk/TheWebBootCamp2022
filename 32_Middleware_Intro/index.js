const { query } = require("express");
const express = require("express");
const app = express();
const morgan = require("morgan");

//middleware
// app.use(morgan("dev"));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method.toUpperCase(), req.path); // like morgan
  return next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I love dogs");
  return next();
});

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "tempPassword") {
    next();
  }
  res.send("Sorry, You need a pssword!");
};

// app.use((req, res, next) => {
//   console.log("This is the first middleware");
//   return next();
// });

// app.use((req, res, next) => {
//   console.log("This is the second middleware");
//   return next();
// });

app.get("/", (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`);
  res.send("Home");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF WOOF");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("About Secret");
});

app.use((req, res) => {
  res.status(404).send("NOT FOUND!");
});

app.listen(3000, () => {
  console.log("App is running on localhost:3000");
});
