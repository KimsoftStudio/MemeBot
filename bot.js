const Discord = require('discord.js');
const bot = new Discord.Client();

const token = BOT_TOKEN;

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg => {
    if(msg.content.includes('69')) {
        msg.channel.sendMessage('Nice');
    }
    if(msg.content.includes('kinky')) {
        msg.channel.sendMessage('( ͡° ͜ʖ ͡°)');
    }
    if(msg.content.includes('Kinky')) {
        msg.channel.sendMessage('( ͡° ͜ʖ ͡°)');
    }
    if(msg.content.includes('uwu')) {
        msg.channel.sendMessage('Degenerate');
    }
    if(msg.content.includes('owo')) {
        msg.channel.sendMessage('Degenerate');
    }
    if(msg.content.includes('OWO')) {
        msg.channel.sendMessage('Degenerate');
    }
    if(msg.content.includes('UWU')) {
        msg.channel.sendMessage('Degenerate');
    }
    if(msg.content.includes('OwO')) {
        msg.channel.sendMessage('Degenerate');
    }
    if(msg.content.includes('UwU')) {
        msg.channel.sendMessage('Degenerate');
    }
    if(msg.content.includes('Hotel?')) {
        msg.channel.sendMessage('Trivago');
    }
    if(msg.content.includes('Hotel')) {
        msg.channel.sendMessage('Trivago');
    }
    if(msg.content.includes('Creeper')) {
        msg.channel.sendMessage('AWW MAN');
    }
    if(msg.content.includes('creeper')) {
        msg.channel.sendMessage('AWW MAN');
    }
    if(msg.content.includes('420')) {
        msg.channel.sendMessage('Blaze It');
    }
    
})

bot.login(token);
