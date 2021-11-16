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
exports.mattress_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await mattress.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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

// Handle mattress delete on DELETE.
exports.mattress_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await mattress.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.mattress_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await mattress.findById(req.query.id)
        res.render('mattressdetail',
            { title: 'Mattress Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a mattress.
// No body, no in path parameter, no query.
// Does not need to be async
exports.mattress_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('mattresscreate', { title: 'Mattress Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a mattress.
// query provides the id
exports.mattress_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await mattress.findById(req.query.id)
        res.render('mattressupdate', { title: 'Mattress Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.mattress_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await mattress.findById(req.query.id)
        res.render('mattressdelete', { title: 'Mattress Delete', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

//Handle mattress update form on PUT. 
exports.mattress_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await mattress.findById(req.params.id)
        // Do updates of properties 
        if (req.body.mattress_type)
            toUpdate.brand = req.body.brand;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.material) toUpdate.material = req.body.material;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};