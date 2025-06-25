const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  try {
    const { date, day, amount, madeAt, type, remarks } = req.body;
    const newExpense = new Expense({ date: new Date(date), day, amount,  madeAt, type, remarks });
    await newExpense.save();
    res.status(201).json({ message: 'Expense saved successfully!' });
  } catch (err) {
    console.error('Add Expense Error:', err);
    res.status(500).json({ message: 'Failed to save expense' });
  }
};

exports.getFilteredExpenses = async (req, res) => {
  try {
    const { fromDate, toDate, category, amountType, amountValue } = req.body;

    const query = {};

    // Date range filter
    if (fromDate && toDate) {
      query.date = { $gte: fromDate, $lte: toDate };
    }

    // Category filter
    if (category) {
      query.type = category;
    }

    // Amount filter
    if (amountType && amountValue !== '') {
      const value = parseFloat(amountValue);
      if (amountType === '<') query.amount = { $lt: value };
      else if (amountType === '<=') query.amount = { $lte: value };
      else if (amountType === '=') query.amount = value;
      else if (amountType === '>') query.amount = { $gt: value };
      else if (amountType === '>=') query.amount = { $gte: value };
    }

    const expenses = await Expense.find(query).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    console.error('Error in filtering expenses:', err);
    res.status(500).json({ message: 'Failed to filter expenses' });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const { fromDate, toDate, category, amountType, amountValue } = req.body;

    let query = {};

    if (fromDate && toDate) {
      query.date = { $gte: fromDate, $lte: toDate };
    }

    if (category) {
      query.type = category;
    }

    if (amountType && amountValue !== '') {
      if (amountType === '<') query.amount = { $lt: Number(amountValue) };
      else if (amountType === '=') query.amount = Number(amountValue);
      else if (amountType === '>') query.amount = { $gt: Number(amountValue) };
    }

    const expenses = await Expense.find(query).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    console.error('Filter fetch error:', err);
    res.status(500).json({ message: 'Error fetching expenses' });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).json({ message: 'Failed to delete' });
  }
};

exports.deleteMultipleExpenses = async (req, res) => {
  try {
    const { ids } = req.body;
    await Expense.deleteMany({ _id: { $in: ids } });
    res.json({ message: 'Selected entries deleted' });
  } catch (err) {
    console.error('Batch delete error:', err);
    res.status(500).json({ message: 'Failed to delete selected' });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const updated = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ message: 'Failed to update' });
  }
};
