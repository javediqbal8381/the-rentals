const mongoose = require('mongoose');

const autocareSchema = new mongoose.Schema({
  username: { type: String, required: true },
  mobileno: { type: Number, required: true },
  carname: { type: String, required: true },
  address: { type: String, required: true },
  time: { type: String, required: true },
  problem: { type: String, required: true },
});

const autocareModel = mongoose.model('autocare', autocareSchema);

module.exports = autocareModel;
