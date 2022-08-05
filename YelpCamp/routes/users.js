const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const users = require('../controllers/users');

router.get('/register', users.renderRegisterForm);

router.post('/register', catchAsync(users.register));

router.get('/login', users.renderLoginForm);

router.post(
  '/login',
  passport.authenticate('local', {
    failureFlash: true,
    failureRedirect: '/login',
    keepSessionInfo: true, // session reset 을 막자!
  }),
  users.login
);

// passport ~0.5
// router.get('/logout', async (req, res) => {
//   await req.logout();
//   req.flash('success', 'Goodbye!');
//   res.redirect('/campgrounds');
// });

// passport 0.6~
router.get('/logout', users.logout);

module.exports = router;
