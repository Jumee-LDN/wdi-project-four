const mongoose = require('mongoose');



const projectSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  title: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  goal: { type: Number, required: true },
  comments: [
    {
      text: String,
      commentBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
    }
  ],
  supports: [
    // { type: mongoose.Schema.ObjectId, ref: 'Support' }
    {
      from: { type: mongoose.Schema.ObjectId, ref: 'User' },
      amount: { type: Number, required: true }
    }, { timestamps: true }
  ]
});

projectSchema.virtual('totalSupport')
  .get(function() {
    return this.supports.reduce((sum, support) => {
      return sum + support.amount;
    }, 0);
  });

projectSchema.virtual('remainder')
  .get(function() {
    return this.goal - this.totalSupport;
  });

projectSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Project', projectSchema);
