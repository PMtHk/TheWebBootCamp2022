const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
// for parsing application/x-www-form-urlencoded
app.use(express.json());
// for pasing json

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  // console.log(req.body);
  const { meat, qty } = req.body;
  res.send(`Ok, here are your ${qty}-${meat} taco`);
});

app.listen(3000, () => {
  console.log("ON PORT 3000!");
});


