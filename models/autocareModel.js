const mongoose = require('mongoose')

const autocareSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    problem: { type: String, required: true }


}
)

const autocareModel = mongoose.model('autocare', autocareSchema)

module.exports = autocareModel;