const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
  // console.log(req.cookies);
  const { name = 'noname' } = req.cookies;
  res.send(`Hey There! ${name}`);
});

app.get('/setname', (req, res) => {
  res.cookie('name', 'zooby');
  res.send('OK Sent u a cookie');
});

app.get('/getsignedcookie', (req, res) => {
  res.cookie('fruit', 'grape', { signed: true });
  res.send('OK done');
});

app.get('/verifyfruit', (req, res) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send(req.signedCookies);
});

app.listen(3000, () => {
  console.log('Listening on Port:3000');
});
