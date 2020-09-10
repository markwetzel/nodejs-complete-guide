const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/videos', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'videos', 'index.html'));
});

router.get('/videos/show', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'videos', 'show.html'));
});

module.exports = router;
