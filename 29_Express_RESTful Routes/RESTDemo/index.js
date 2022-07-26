const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
// for parsing application/x-www-form-urlencoded
app.use(express.json());
// for pasing json
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

let comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "lol that is so funny",
  },
  {
    id: uuid(),
    username: "Skyler",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuid(),
    username: "Sk8erBoi",
    comment: "Plz delete ur account, Todd",
  },
  {
    id: uuid(),
    username: "PMtHk",
    comment: "I wanna be the web developer",
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newComment = req.body.comment;
  const targetComment = comments.find((c) => c.id === id);
  targetComment.comment = newComment;
  res.redirect("/comments");
});

app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

// app.get("/tacos", (req, res) => {
//   res.send("GET /tacos response");
// });

// app.post("/tacos", (req, res) => {
//   // console.log(req.body);
//   const { meat, qty } = req.body;
//   res.send(`Ok, here are your ${qty}-${meat} taco`);
// });

app.listen(3000, () => {
  console.log("ON PORT 3000!");
});
