const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  day: { type: String, required: true },
  amount: { type: Number, required: true },
  madeAt: { type: String },
  type: { type: String, required: true },
  remarks: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);
