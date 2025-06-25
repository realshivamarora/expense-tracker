const express = require('express');
const router = express.Router();
const {
  addExpense,
  getExpenses,
  getFilteredExpenses,
  deleteExpense,
  deleteMultipleExpenses,
  updateExpense
} = require('../controllers/expenseController');

router.post('/add', addExpense);
router.post('/filter', getFilteredExpenses);
router.delete('/delete/:id', deleteExpense);
router.post('/delete-multiple', deleteMultipleExpenses);
router.put('/update/:id', updateExpense);

module.exports = router;
