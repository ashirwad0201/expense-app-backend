const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expense');
const userAuthentication = require('../middleware/auth');

router.get('/get-expense', userAuthentication.authenticate, expenseController.getExpense);
router.post('/insert-expense', userAuthentication.authenticate, expenseController.insertExpense);
router.delete('/delete-expense/:id', userAuthentication.authenticate, expenseController.deleteExpense);

module.exports = router;