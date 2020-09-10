const http = require('http');
const express = require('express');

const app = express();

const PORT = 5000;

app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

app.use('/users', (req, res, next) => {
  console.log('Users Middleware');
  return res.send('Users');
});

app.use('/', (req, res, next) => {
  console.log('Home Middleware');
  return res.send('Home Page');
});

app.listen(PORT, () => {
  console.log('Listening');
});
