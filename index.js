const mineflayer = require('mineflayer');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('AFK Bot is running!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function createBot() {
  const bot = mineflayer.createBot({
    host: 'CraftSMP-w3aQ.aternos.me'
    port: 11179
    username: 'AFK_Bot_247'
  });

  bot.on('spawn', () => {
    console.log('دخل البوت إلى السيرفر بنجاح!');
  });

  bot.on('time', () => {
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('jump', false);
    }, 500);
  });

  bot.on('end', () => {
    console.log('تم فصل البوت، جاري إعادة الاتصال خلال 30 ثانية...');
    setTimeout(createBot, 30000);
  });

  bot.on('error', (err) => {
    console.log('حدث خطأ:', err);
  });
}

createBot();
