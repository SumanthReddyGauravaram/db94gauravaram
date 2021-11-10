var mattress = require('../models/mattress');
// List of all mattress
exports.mattress_list = async function (req, res) {
    try {
        themattress = await mattress.find();
        res.send(themattress);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.mattress_view_all_Page = async function (req, res) {
    try {
        themattress = await mattress.find();
        res.render('mattress', { title: 'mattress Search Results', results: themattress });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// for a specific mattress.
exports.mattress_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: mattress detail: ' + req.params.id);
};
// Handle mattress create on POST. 
exports.mattress_create_post = async function (req, res) {
    console.log(req.body)
    let document = new mattress();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand; 
    document.material = req.body.material; 
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle mattress delete form on DELETE.
exports.mattress_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: mattress delete DELETE ' + req.params.id);
};
// Handle mattress update form on PUT.
exports.mattress_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: mattress update PUT' + req.params.id);
};