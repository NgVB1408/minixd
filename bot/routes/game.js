const express = require('express');
const router = express.Router();

router.post('/submit', (req, res) => {
  const { playerName, score } = req.body;
  console.log(`Player: ${playerName}, Score: ${score}`);
  res.status(200).send({ message: 'Score submitted successfully' });
});

module.exports = router;

