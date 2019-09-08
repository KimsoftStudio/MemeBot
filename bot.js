const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () =>{
    console.log('This bot is online!');
});

bot.on('message', message => {
    if(message.content.includes('69')) {
        message.channel.sendMessage('Nice');
    }
    if(message.content.includes('kinky')) {
        message.channel.sendMessage('( ͡° ͜ʖ ͡°)');
    }
    if(message.content.includes('Kinky')) {
        message.channel.sendMessage('( ͡° ͜ʖ ͡°)');
    }
    if(message.content.includes('uwu')) {
        message.channel.sendMessage('Degenerate');
    }
    if(message.content.includes('owo')) {
        message.channel.sendMessage('Degenerate');
    }
    if(message.content.includes('OWO')) {
        message.channel.sendMessage('Degenerate');
    }
    if(message.content.includes('UWU')) {
        message.channel.sendMessage('Degenerate');
    }
    if(message.content.includes('OwO')) {
        message.channel.sendMessage('Degenerate');
    }
    if(message.content.includes('UwU')) {
        message.channel.sendMessage('Degenerate');
    }
    if(message.content.includes('Hotel?')) {
        message.channel.sendMessage('Trivago');
    }
    if(message.content.includes('Hotel')) {
        message.channel.sendMessage('Trivago');
    }
    if(message.content.includes('Creeper')) {
        message.channel.sendMessage('AWW MAN');
    }
    if(message.content.includes('creeper')) {
        message.channel.sendMessage('AWW MAN');
    }
    if(message.content.includes('420')) {
        message.channel.sendMessage('Blaze It');
    }
    
});

client.login(process.env.BOT_TOKEN);
