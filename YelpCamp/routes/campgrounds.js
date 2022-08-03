const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { campgroundSchema } = require('../schemas.js');

const ExpressError = require('../utils/ExpressError');
const Campground = require('../models/campground');
const methodOverride = require('method-override');

const validateCampground = (req, res, next) => {
  // schema 에 data 전달하기
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((element) => element.message).join(',');
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

router.get(
  '/',
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
  })
);

router.get('/new', (req, res) => {
  res.render('campgrounds/new');
});

router.get(
  '/:id',
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const targetCamp = await Campground.findById(id).populate('reviews');
    res.render('campgrounds/detail', { targetCamp });
  })
);

router.post(
  '/',
  validateCampground,
  catchAsync(async (req, res) => {
    // if (!req.body.campground) throw new ExpressError('Invalid Campground Data', 400);

    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

router.get(
  '/:id/edit',
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const targetCamp = await Campground.findById(id);
    res.render('campgrounds/edit', { targetCamp });
  })
);

router.put(
  '/:id',
  validateCampground,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {
      ...req.body.campground,
    });
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

router.delete(
  '/:id',
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
  })
);

module.exports = router;
