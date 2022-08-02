const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/relationshipDemo')
  .then(() => {
    console.log('Mongo Connection Open!');
  })
  .catch((error) => {
    console.log('Mongo Connection Failed!');
    console.log(error);
  });

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ['Spring', 'Summer', 'Fall', 'Winter'],
  },
});

const farmSchema = new mongoose.Schema({
  name: String,
  city: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//   { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//   { name: 'Sugar Baby Watermelon', price: 11.99, season: 'Summer' },
//   { name: 'Asparagus', price: 3.99, season: 'Spring' },
// ]);

const makeFarm = async () => {
  const farm = new Farm({ name: 'Full Belly Farm', city: 'Guinda, CA' });
  const melon = await Product.findOne({ name: 'Goddess Melon' });
  farm.products.push(melon);
  await farm.save();
  console.log(farm);
};

// makeFarm();

Farm.findOne({ name: 'Full Belly Farm' })
  .populate('products')
  .then((farm) => console.log(farm));
