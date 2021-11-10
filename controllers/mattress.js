var mattress = require('../models/mattress');
// List of all mattress
exports.mattress_list = function(req, res) {
res.send('NOT IMPLEMENTED: mattress list');
};
// for a specific mattress.
exports.mattress_detail = function(req, res) {
res.send('NOT IMPLEMENTED: mattress detail: ' + req.params.id);
};
// Handle mattress create on POST.
exports.mattress_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: mattress create POST');
};
// Handle mattress delete form on DELETE.
exports.mattress_delete = function(req, res) {
res.send('NOT IMPLEMENTED: mattress delete DELETE ' + req.params.id);
};
// Handle mattress update form on PUT.
exports.mattress_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: mattress update PUT' + req.params.id);
};