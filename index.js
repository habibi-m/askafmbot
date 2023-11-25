const TelegramBot = require('node-telegram-bot-api')
const token = '6712884407:AAGOle8JFoDwklta1XuJQzkU7VJvu2TfKOw';
const bot = new TelegramBot(token, { polling: true });
const express = require('express');
const app = express();

bot.on('message', (context) => {
    const chatId = context.chat.id;
    const messageText = context.text;

    console.log(`chatId: ${chatId}, messageText: ${messageText}`);

    if (messageText === '/start') {
        bot.sendMessage(chatId, 'Welcome to the bot!');
    }

});


 
app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello server is running')
    .end();
});
 
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});



// //process.env.NTBA_FIX_319 = 1;
// const TelegramBot = require('node-telegram-bot-api');
// const Agent = require('socks5-https-client/lib/Agent');
// const token = '6712884407:AAGOle8JFoDwklta1XuJQzkU7VJvu2TfKOw';

// const bot = new TelegramBot(token, {
//     polling: true, 
//     request: {
//         agentClass: Agent,
//         agentOptions: {
//             socksHost: '127.0.0.1',
//             socksPort: '9150'
//         }
//     }
// });

// bot.on('message', (context) => {
//     console.log(`chatId: ${context.chat.id}, messageText: ${context.chat}`);
//     bot.sendMessage(context.chat.id, "hello");
// });

// bot.on("polling_error", (error) => console.log(`polling error! ${error}`));