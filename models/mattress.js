const mongoose = require("mongoose")
const MattressSchema = mongoose.Schema({
    brand: String,
    material: String,
    cost: {
        type: String,
        minLength: 2
    }
})
module.exports = mongoose.model("Mattress", MattressSchema)