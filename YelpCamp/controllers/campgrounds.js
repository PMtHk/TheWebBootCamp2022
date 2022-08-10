const Campground = require('../models/campground');
const { cloudinary } = require('../cloudinary');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });

module.exports.index = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render('campgrounds/index', { campgrounds });
};

module.exports.renderNewForm = (req, res) => {
  res.render('campgrounds/new');
};

module.exports.createCampground = async (req, res) => {
  const geoData = await geocoder
    .forwardGeocode({
      query: req.body.campground.location,
      limit: 1,
    })
    .send();
  console.log(geoData.body.features[0].geometry.coordinates);
  // console.log(geoData);
  // const campground = new Campground(req.body.campground);
  // campground.author = req.user._id;
  // campground.images = req.files.map((f) => ({
  //   url: f.path,
  //   filename: f.filename,
  // }));

  // await campground.save();
  // req.flash('success', 'Successfully Create a New Campground');
  // res.redirect(`/campgrounds/${campground._id}`);
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

// 현재 업데이트시 새로운 객체가 생기고 db에 저장됨
module.exports.updateCampground = async (req, res) => {
  const { id } = req.params;

  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });

  const imgs = req.files.map((f) => ({
    url: f.path,
    filename: f.filename,
  }));

  campground.images.push(...imgs);
  await campground.save();

  // 업데이트시 기존 업로드 이미지 삭제
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      await cloudinary.uploader.destroy(filename);
    }
    await campground.updateOne({
      $pull: { images: { filename: { $in: req.body.deleteImages } } },
    });
  }

  req.flash('success', 'Successfully Updated Campground');
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.deleteCampground = async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  req.flash('success', 'Successfully Deleted Campground');
  res.redirect('/campgrounds');
};
