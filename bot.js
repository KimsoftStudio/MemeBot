const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'funny memes',
            type: "STREAMING",
            url: 'https://www.youtube.com/watch?v=fC7oUOUEEi4'
        }
     });
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
    if(message.content.includes('egg')) {
        message.channel.sendMessage('I see you are a man of culture as well.');
    }
    if(message.content.includes('Egg')) {
        message.channel.sendMessage('I see you are a man of culture as well.');
    }
    if(message.content.includes('EgG')) {
        message.channel.sendMessage('I see you are a man of culture as well.');
    }
    if(message.content.includes('eGg')) {
        message.channel.sendMessage('I see you are a man of culture as well.');
    }
    if(message.content.includes('egG')) {
        message.channel.sendMessage('I see you are a man of culture as well.');
    }
    if(message.content.includes('EGG')) {
        message.channel.sendMessage('I see you are a man of culture as well.');
    }
    if(message.content.includes('sixtynine')) {
        message.channel.sendMessage('Nice');
    }
    if(message.content.includes('sixty-nine')) {
        message.channel.sendMessage('Nice');
    }
    if(message.content.includes("you're dead")) {
        message.channel.sendMessage('F');
    }
    if(message.content.includes("( ͡° ͜ʖ ͡°)")) {
        message.channel.sendMessage('Deli', {files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/deli.png"]});
    }
    if(message.content.includes("jpeg")) {
        message.channel.sendMessage('I Just want of picture of a gotdang hotdog', {files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/jpeg.gif"]});
    }
    if(message.content.includes("jpg")) {
        message.channel.sendMessage('I Just want of picture of a gotdang hotdog', {files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/jpeg.gif"]});
    }
    if(message.content.includes(".jpg")) {
        message.channel.sendMessage('I Just want of picture of a gotdang hotdog', {files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/jpeg.gif"]});
    }
    if(message.content.includes("Jpeg")) {
        message.channel.sendMessage('I Just want of picture of a gotdang hotdog', {files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/jpeg.gif"]});
    }
    if(message.content.includes("Jpg")) {
        message.channel.sendMessage('I Just want of picture of a gotdang hotdog', {files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/jpeg.gif"]});
    }
    if(message.content.includes("69bot buy a new one")) {
        message.channel.sendMessage('!', {files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/discordIcon.png"]});
    }
    if(message.content.includes("69 bot buy a new one")) {
        message.channel.sendMessage('!', {files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/discordIcon.png"]});
    }
    if(message.content.includes("69 Bot buy a new one")) {
        message.channel.sendMessage('!', {files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/discordIcon.png"]});
    }
    if(message.content.includes("69Bot buy a new one")) {
        message.channel.sendMessage('!', {files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/discordIcon.png"]});
    }
    if(message.content.includes("nani")) {
        message.channel.sendMessage({files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/naniN.jpg"]});
    }
    if(message.content.includes("Nani")) {
        message.channel.sendMessage({files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/naniN.jpg"]});
    }
    if(message.content.includes("snake")) {
        message.channel.sendMessage({files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/Flacid_Snnake.png"]});
    }
    if(message.content.includes("flacid")) {
        message.channel.sendMessage({files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/Flacid_Snnake.png"]});
    }
    if(message.content.includes("Snake")) {
        message.channel.sendMessage({files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/Flacid_Snnake.png"]});
    }
    if(message.content.includes("Flacid")) {
        message.channel.sendMessage({files: ["https://raw.githubusercontent.com/KimsoftStudio/MemeBot/master/Flacid_Snnake.png"]});
    }
    if(message.content.includes("wah")) {
        message.channel.sendMessage({files: ["https://cdn.discordapp.com/attachments/347254691966615552/748290292049772554/mario_wash.mp4"]});
    }
    if(message.content.includes("it's monday")) {
        message.channel.sendMessage({files: ["https://cdn.discordapp.com/attachments/738573605268619295/841193029154111488/video0-8.mp4"]});
    }
    if(message.content.includes("it's Monday")) {
        message.channel.sendMessage({files: ["https://cdn.discordapp.com/attachments/738573605268619295/841193029154111488/video0-8.mp4"]});
    }
    if(message.content.includes("It's monday")) {
        message.channel.sendMessage({files: ["https://cdn.discordapp.com/attachments/738573605268619295/841193029154111488/video0-8.mp4"]});
    }
    if(message.content.includes("It's Monday")) {
        message.channel.sendMessage({files: ["https://cdn.discordapp.com/attachments/738573605268619295/841193029154111488/video0-8.mp4"]});
    }
    
    if(message.content.includes("its monday")) {
        message.channel.sendMessage({files: ["https://cdn.discordapp.com/attachments/738573605268619295/841193029154111488/video0-8.mp4"]});
    }
    if(message.content.includes("its Monday")) {
        message.channel.sendMessage({files: ["https://cdn.discordapp.com/attachments/738573605268619295/841193029154111488/video0-8.mp4"]});
    }
    if(message.content.includes("Its monday")) {
        message.channel.sendMessage({files: ["https://cdn.discordapp.com/attachments/738573605268619295/841193029154111488/video0-8.mp4"]});
    }
    if(message.content.includes("Its Monday")) {
        message.channel.sendMessage({files: ["https://cdn.discordapp.com/attachments/738573605268619295/841193029154111488/video0-8.mp4"]});
    }
});

bot.login(process.env.BOT_TOKEN);
