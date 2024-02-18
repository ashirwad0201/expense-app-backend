const express = require('express');

const router = express.Router();

const expenseController = require('../controllers/expense');

router.get('/get-expense', expenseController.getExpense);
router.post('/insert-expense', expenseController.insertExpense);
router.delete('/delete-expense/:id', expenseController.deleteExpense);

module.exports = router;