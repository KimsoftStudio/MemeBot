const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () =>{
    console.log('This bot is online!');
});

bot.on('message', message => {
    if(message.content.includes('69')) {
        message.channel.sendMessage('Nice');
    }
    if(message.content.includes('uwu')) {
        message.channel.sendMessage('You degenerate');
    }
    if(message.content.includes('owo')) {
        message.channel.sendMessage('You degenerate');
    }
    if(message.content.includes('UwU')) {
        message.channel.sendMessage('You degenerate');
    }
    if(message.content.includes('OwO')) {
        message.channel.sendMessage('You degenerate');
    }
    if(message.content.includes('UWU')) {
        message.channel.sendMessage('You degenerate');
    }
    if(message.content.includes('OWO')) {
        message.channel.sendMessage('You degenerate');
    }
    if(message.content.includes('kinky')) {
        message.channel.sendMessage('( ͡° ͜ʖ ͡°)');
    }
    if(message.content.includes('sexy')) {
        message.channel.sendMessage('( ͡° ͜ʖ ͡°)');
    }
    if(message.content.includes('Sexy')) {
        message.channel.sendMessage('( ͡° ͜ʖ ͡°)');
    }
    if(message.content.includes('Kinky')) {
        message.channel.sendMessage('( ͡° ͜ʖ ͡°)');
    }
    if(message.content.includes('hotel')) {
        message.channel.sendMessage('Trivago');
    }
    if(message.content.includes('Hotel')) {
        message.channel.sendMessage('Trivago');
    }
    if(message.content.includes('creeper')) {
        message.channel.sendMessage('AWW MAN');
    }
    if(message.content.includes('Creeper')) {
        message.channel.sendMessage('AWW MAN');
    }
    if(message.content.includes('6ix9ine')) {
        message.channel.sendMessage('Oof. Wrong one bud.');
    }
    if(message.content.includes('6ix 9ine')) {
        message.channel.sendMessage('Oof. Wrong one bud.');
    }
    if(message.content.includes('Watch')) {
        message.channel.sendMessage('┬┴┬┴┤(･_├┬┴┬┴');
    }
    if(message.content.includes('watch')) {
        message.channel.sendMessage('┬┴┬┴┤(･_├┬┴┬┴');
    }
    if(message.content.includes('six nine')) {
        message.channel.sendMessage('Nice');
    }
    if(message.content.includes('sixnine')) {
        message.channel.sendMessage('Nice');
    }
    if(message.content.includes('sixty nine')) {
        message.channel.sendMessage('Nice');
    }
    if(message.content.includes('sixtynine')) {
        message.channel.sendMessage('Nice');
    }
    if(message.content.includes('sixty-nine')) {
        message.channel.sendMessage('Nice');
    }
});

bot.login(process.env.BOT_TOKEN);
