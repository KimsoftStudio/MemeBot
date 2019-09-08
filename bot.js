const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () =>{
    console.log('This bot is online!');
});

bot.on('message', message => {
    if(message.content.includes('69')) {
        message.channel.sendMessage('Nice');
    }
});

bot.login(process.env.BOT_TOKEN);
