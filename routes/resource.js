var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var mattress_controller = require('../controllers/mattress');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// mattress ROUTES ///
// POST request for creating a mattress.
router.post('/mattress', mattress_controller.mattress_create_post);
// DELETE request to delete mattress.
router.delete('/mattress/:id', mattress_controller.mattress_delete);
// PUT request to update mattress.
router.put('/mattress/:id', mattress_controller.mattress_update_put);
// GET request for one mattress.
router.get('/mattress/:id', mattress_controller.mattress_detail);
// GET request for list of all mattress items.
router.get('/mattress', mattress_controller.mattress_list);

module.exports = router;