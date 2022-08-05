const express = require('express');
const router = express.Router({ mergeParams: true });;
const catchAsync = require('../utils/catchAsync');
const passport = require('passport');
const users = require('../controllers/users');

router
  .route('/register')
  .get(users.renderRegisterForm)
  .post(catchAsync(users.register));

router
  .route('/login')
  .get(users.renderLoginForm)
  .post(
    passport.authenticate('local', {
      failureFlash: true,
      failureRedirect: '/login',
      keepSessionInfo: true, // session reset 을 막자!
    }),
    users.login
  );

router.get('/logout', users.logout);

// passport ~0.5 but now...
// router.get('/logout', async (req, res) => {
//   await req.logout();
//   req.flash('success', 'Goodbye!');
//   res.redirect('/campgrounds');
// });

module.exports = router;
