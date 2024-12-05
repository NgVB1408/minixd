const axios = require('axios');

const sendMessage = async (chatId, text) => {
  const token = '<YOUR_TELEGRAM_BOT_TOKEN>';
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    await axios.post(url, {
      chat_id: chatId,
      text: text,
    });
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

module.exports = { sendMessage };
