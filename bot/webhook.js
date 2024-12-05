const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;
  console.log(message);
  res.status(200).send('Webhook received');
});

module.exports = router;
