const mongoose = require('mongoose');


const supportSchema = mongoose.Schema({
  from: { type: mongoose.Schema.ObjectId, ref: 'User' },
  to: { type: mongoose.Schema.ObjectId, ref: 'User' },
  inResponseTo: { type: mongoose.Schema.ObjectId, ref: 'Project' },
  amount: { type: Number, required: true },
  content: { type: String }
}, { timestamps: true });

supportSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Support', supportSchema);
