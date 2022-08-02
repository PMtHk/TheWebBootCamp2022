const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose
  .connect('mongodb://localhost:27017/relationshipDemo')
  .then(() => {
    console.log('Mongo Connection Open!');
  })
  .catch((error) => {
    console.log('Mongo Connection Failed!');
    console.log(error);
  });

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//   // const user = new User({ username: 'PMtHk', age: 25 });
//   const user = await User.findOne({ username: 'PMtHk' });
//   const tweet2 = new Tweet({ text: 'Study Hard!', likes: 3 });
//   tweet2.user = user;
//   tweet2.save();
// };

// makeTweets();

const findTweet = async () => {
  // const t = await Tweet.find({}).populate('user');
  const t = await Tweet.find({}).populate('user', 'username');
  console.log(t);
};
findTweet();
