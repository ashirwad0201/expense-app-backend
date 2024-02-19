const express = require('express');
const router = express.Router();
const premiumController = require('../controllers/premium');

router.get('/get-leaderboard', premiumController.getLeaderBoard);

module.exports = router;