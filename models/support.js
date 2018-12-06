const mongoose = require('mongoose');


const supportSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.ObjectId, ref: 'User' },
  to: { type: mongoose.Schema.ObjectId, ref: 'User' },
  inResponseTo: { type: mongoose.Schema.ObjectId, ref: 'Support' },
  project: { type: mongoose.Schema.ObjectId, ref: 'Project', required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  amount: Number
}, { timestamps: true });



supportSchema.virtual('supportList', {
  ref: 'Project',
  localField: '_id',
  foreignField: 'supports'
});

supportSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Support', supportSchema);
