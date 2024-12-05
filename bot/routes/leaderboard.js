const express = require('express');
const router = express.Router();

// Dummy leaderboard data
let leaderboard = [];

router.get('/', (req, res) => {
  leaderboard.sort((a, b) => b.score - a.score); // Sort by score
  res.status(200).send(leaderboard);
});

router.post('/update', (req, res) => {
  const { playerName, score } = req.body;
  leaderboard.push({ playerName, score });
  res.status(200).send({ message: 'Leaderboard updated successfully' });
});

module.exports = router;

