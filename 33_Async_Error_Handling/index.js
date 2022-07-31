const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Product = require("./models/product");
const { findOneAndDelete, findByIdAndDelete } = require("./models/product");

const AppError = require("./AppError");

mongoose
  .connect("mongodb://localhost:27017/farmStand2")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "dairy"];

app.get("/products", async (req, res, next) => {
  try {
    const { category } = req.query;
    if (category) {
      const products = await Product.find({ category });
      res.render("products/index", { products, category });
    } else {
      const products = await Product.find({});
      res.render("products/index", { products, category: "ALL" });
    }
  } catch (err) {
    next(err);
  }
});

app.get("/products/new", (req, res) => {
  // throw new AppError("Not Allowed", 401);
  res.render("products/new", { categories });
});

app.post("/products", async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
  } catch (err) {
    next(err);
  }
});

app.get("/products/:id", async (req, res, next) => {
  // const { id } = req.params;
  // const product = await Product.findById(id);
  // if (!product) {
  //   throw new AppError("Product Not Found", 404)
  // }  -> express@5.x.x 에서 동작  x 아래와 같이 수정.
  // console.log(product);

  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.render("products/detail", { product });
  } catch (err) {
    next(new AppError("Product Not Found", 404));
  }
});

app.get("/products/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  //  위와 마찬가지로 최신버전에 맞게 활용.
  try {
    const product = await Product.findById(id);
    res.render("products/edit", { product, categories });
  } catch (err) {
    next(new AppError("Product Not Found", 404));
  }
});

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}

app.put(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.redirect(`/products/${product._id}`);
  })
);

app.delete("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect("/products");
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Something Went Wrong!" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("APP IS LISTENING ON PORT 3000!");
});
