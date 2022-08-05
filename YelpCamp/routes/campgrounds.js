const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { campgroundSchema } = require('../schemas.js');
const flash = require('connect-flash');

const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground');
const methodOverride = require('method-override');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');

router.get(
  '/',
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
  })
);

router.get('/new', isLoggedIn, (req, res) => {
  res.render('campgrounds/new');
});

router.get(
  '/:id',
  catchAsync(async (req, res) => {
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
  })
);

router.post(
  '/',
  isLoggedIn,
  validateCampground,
  catchAsync(async (req, res) => {
    // if (!req.body.campground) throw new ExpressError('Invalid Campground Data', 400);

    const campground = new Campground(req.body.campground);
    campground.author = req.user._id;
    await campground.save();
    req.flash('success', 'Successfully Create a New Campground');
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

router.get(
  '/:id/edit',
  isLoggedIn,
  isAuthor,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const targetCamp = await Campground.findById(id);
    if (targetCamp === null) {
      // 현재 _id 형태일때만 동작. 일반 String 형식이 들어오면 flash - X
      // 에러 핸들링은 됨.
      req.flash('error', 'Cannot find that campground!');
      return res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', { targetCamp });
  })
);

router.put(
  '/:id',
  isLoggedIn,
  isAuthor,
  validateCampground,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {
      ...req.body.campgorund,
    });
    req.flash('success', 'Successfully Updated Campground');
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

router.delete(
  '/:id',
  isLoggedIn,
  isAuthor,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'Successfully Deleted Campground');
    res.redirect('/campgrounds');
  })
);

module.exports = router;
