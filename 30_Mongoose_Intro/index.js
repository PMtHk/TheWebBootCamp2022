const mongoose = require("mongoose");

// Connect to database
mongoose
  .connect("mongodb://localhost:27017/movieApp")
  .then(() => {
    console.log("CONNECTION OPEN!");
  })
  .catch((err) => {
    console.log("CONNECTION ERROR!");
  });

// previous way
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "CONNECTION ERROR!"));
// db.once("open", function () {
//   console.log("CONNECTION OPEN!");
// });

// Compiling Schema
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  grade: String,
});

const Movie = mongoose.model("Movie", movieSchema); // (model이름, schema 이름) 전달하기
// const broker = new Movie({
//   title: "Broker",
//   year: 2022,
//   score: 6.69,
//   grade: "12+",
// });

// Movie.insertMany([
//   {
//     title: "TopGun: Maverick",
//     year: 2022,
//     score: 9.6,
//     grade: "12+",
//   },
//   {
//     title: "Minions 2",
//     year: 2022,
//     score: 8.9,
//     grade: "All",
//   },
//   {
//     title: "Iron Man 2",
//     year: 2010,
//     score: 7.37,
//     grade: "12+",
//   },
//   {
//     title: "Avengers: Endgame",
//     year: 2019,
//     score: 9.5,
//     grade: "12+",
//   },
// ]).then((data) => {
//   console.log("insertMany Worked!");
//   console.log(data);
// });
