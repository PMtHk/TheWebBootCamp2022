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

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    // embedded schema -> default
    // false -> _id 자동으로 추가하지 않음.
    // _id : { id : false }
    {
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

// 해당 방식은 양이 많지 않을 때는 유용하지만, 세부 내용의 양이 과하면 좋지않다.

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
  const u = new User({
    first: 'Harry',
    last: 'Potter',
  });
  u.addresses.push({
    street: '123 Sesame St.',
    city: 'New York',
    state: 'NY',
    country: 'USA',
  });
  const res = await u.save();
  console.log(res);
};

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: '99 3rd St.',
    city: 'New York',
    state: 'NY',
    country: 'USA',
  });
  const res = await user.save();
  console.log(res);
};

// makeUser();
addAddress('62e8c8e71ed8fbd81a301688');
