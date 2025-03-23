const mongoose = require('mongoose');

const FundSchema = new mongoose.Schema({
  sector: { type: String, required: true },
  allocatedAmount: { type: Number, required: true },
  utilizedAmount: { type: Number, default: 0 },
});

module.exports = mongoose.model('Fund', FundSchema);