var express = require('express');
const mattress_controlers= require('../controllers/mattress');
var router = express.Router();

/* GET mattress */ 
router.get('/', mattress_controlers.mattress_view_all_Page );
module.exports = router;

// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
  if (req.user){
      return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mattress', { title: 'Search Results mattress' });
});

/* GET detail mattress page */
router.get('/detail', mattress_controlers.mattress_view_one_Page);

/* GET create mattress page */
router.get('/create', mattress_controlers.mattress_create_Page);

/* GET create update page */
router.get('/update', secured,mattress_controlers.mattress_update_Page);

/* GET create mattress page */
router.get('/delete', mattress_controlers.mattress_delete_Page);

module.exports = router;
