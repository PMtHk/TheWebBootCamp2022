const Campground = require('../models/campground');

module.exports.index = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render('campgrounds/index', { campgrounds });
};

module.exports.renderNewForm = (req, res) => {
  res.render('campgrounds/new');
};

module.exports.createCampground = async (req, res) => {
  // if (!req.body.campground) throw new ExpressError('Invalid Campground Data', 400);

  const campground = new Campground(req.body.campground);
  campground.author = req.user._id;
  await campground.save();
  req.flash('success', 'Successfully Create a New Campground');
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.showCampground = async (req, res) => {
  const { id } = req.params;
  const targetCamp = await Campground.findById(id)
    .populate({ path: 'reviews', populate: { path: 'author' } })
    .populate('author');
  // console.log(targetCamp);
  if (targetCamp === null) {
    // 현재 _id 형태일때만 동작. 일반 String 형식이 들어오면 flash - X
    // 에러 핸들링은 됨.
    req.flash('error', 'Cannot find that campground!');
    return res.redirect('/campgrounds');
  }
  res.render('campgrounds/detail', { targetCamp });
};

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const targetCamp = await Campground.findById(id);
  if (targetCamp === null) {
    // 현재 _id 형태일때만 동작. 일반 String 형식이 들어오면 flash - X
    // 에러 핸들링은 됨.
    req.flash('error', 'Cannot find that campground!');
    return res.redirect('/campgrounds');
  }
  res.render('campgrounds/edit', { targetCamp });
};

module.exports.updateCampground = async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campgorund,
  });
  req.flash('success', 'Successfully Updated Campground');
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.deleteCampground = async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  req.flash('success', 'Successfully Deleted Campground');
  res.redirect('/campgrounds');
};
