const { query } = require("express");
const express = require("express");
const app = express();
const morgan = require("morgan");

const AppError = require("./AppError");

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
  // res.send("Sorry, You need a pssword!");
  // res.status(401);
  throw new AppError("Password required", 401);
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

app.get("/error", (re, res) => {
  chicken.fly();
});

app.get("/dogs", (req, res) => {
  res.send("WOOF WOOF");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("About Secret");
});

app.get("/admin", (req, res) => {
  throw new AppError("You are not an Admin!", 403);
});

app.use((req, res) => {
  res.status(404).send("NOT FOUND!");
});

// app.use((err, req, res, next) => {
//   console.log("********************************************");
//   console.log("********************ERROR*******************");
//   console.log("********************************************");
//   // res.status(500).send("Error...");
//   next(err); // 오류를 내장 error 핸들러에게 넘기는 방법.
// });

app.use((err, req, res, next) => {
  const { status = 500, message = "Something Went Wrong!" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("App is running on localhost:3000");
});
