const mongoose = require("mongoose")
const MattressSchema = mongoose.Schema({
    brand: String,
    material: String,
    cost: String
})
module.exports = mongoose.model("Mattress", MattressSchema)