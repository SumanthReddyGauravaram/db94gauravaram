var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mattress', { title: 'Search Results mattress' });
});

module.exports = router;
