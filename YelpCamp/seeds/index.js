// seed를 db에 업로드 하기 위한 작업
const mongoose = require("mongoose");
const cities = require("./cities");
const Campground = require("../models/campground");
const { places, descriptors } = require("./seedHelper");

mongoose
  .connect("mongodb://localhost:27017/yelp-camp")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed");
    console.log(err);
  });

// 강의 대로 하면
// TypeError: Cannot read properties of undefined (reading 'length') 발생
// array 가 undefined 가 아닌지 확인 필요.
const sample = (array) => {
  if (Array.isArray(array)) {
    return array[Math.floor(Math.random() * array.length)];
  } else {
    return null;
  }
};

const seedDB = async () => {
  await Campground.deleteMany({}); // step 1 : db 초기화.
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const camp = new Campground({
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
  console.log("Connection Closed");
});
