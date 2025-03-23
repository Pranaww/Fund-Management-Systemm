const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  sector: { type: String, required: true },
  requestedAmount: { type: Number, required: true },
  approvedAmount: { type: Number, default: 0 },
  status: { type: String, enum: ['pending', 'ongoing', 'completed', 'delayed'], default: 'pending' },
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Project', ProjectSchema);