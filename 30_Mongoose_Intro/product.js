const mongoose = require("mongoose");

// Connect to database
mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then(() => {
    console.log("CONNECTION OPEN!");
  })
  .catch((err) => {
    console.log("CONNECTION ERROR!");
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
  name: "Mountain Bike", // name = required field  없으면 에러발생.
  price: 599,
});

bike
  .save()
  .then((data) => {
    cosole.log("Saved");
    console.log(data);
  })
  .catch((err) => {
    console.log("Error!");
    console.log(err);
  });
