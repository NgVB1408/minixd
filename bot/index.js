const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Import routes
const gameRoutes = require('./routes/game');
const leaderboardRoutes = require('./routes/leaderboard');

// Routes
app.use('/game', gameRoutes);
app.use('/leaderboard', leaderboardRoutes);

// Webhook route
app.post('/webhook', (req, res) => {
  console.log(req.body);
  res.status(200).send('Webhook received');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

