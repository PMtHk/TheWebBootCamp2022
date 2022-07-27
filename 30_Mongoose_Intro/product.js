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

productSchema.methods.greet = function () {
  console.log(`Its ${this.name}`);
};

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

const Product = mongoose.model("Product", productSchema);
const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Bike Helmet" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  //  await foundProduct.greet();
};

// const bike = new Product(
//   {
//     name: "Mountain Bike", // name = required field  없으면 에러발생.
//     price: 599,
//   },
//   { new: true, runValidators: true }
// );

// bike
//   .save()
//   .then((data) => {
//     cosole.log("Saved");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });

// Product.findOneAndUpdate({ name: "Tire Pump" }, { price: -10.99 })
//   .then((data) => {
//     cosole.log("Saved");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });
