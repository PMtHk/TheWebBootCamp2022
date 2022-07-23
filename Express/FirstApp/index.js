const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("WE GOT A NEW REQUEST!!");
  // res.send("Hello, We got your request! This is a response");
  res.send("<h1>This is My WebPage!");
});

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080!");
});
