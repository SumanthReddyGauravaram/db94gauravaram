var express = require('express');
const mattress_controlers= require('../controllers/mattress');
var router = express.Router();

/* GET mattress */ 
router.get('/', mattress_controlers.mattress_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mattress', { title: 'Search Results mattress' });
});

/* GET detail mattress page */
router.get('/detail', mattress_controlers.mattress_view_one_Page);

/* GET create mattress page */
router.get('/create', mattress_controlers.mattress_create_Page);

module.exports = router;
