var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = ">" //The text before commands, you can put anything that you prefer

    if(message.author.id != "610434030889861138" && message.channel.id === "596210004277592066"){
        if(msg.startsWith('>', 0)){
            if(msg === prefix + "bang" && message.channel.id === "596210004277592066"){
                message.channel.send('BOOM!!!!!') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand >bang right now. More will be added when my creator is free. :) ")
            }
        }
        {
        if(msg.startsWith('>', 0)){
            if(msg === prefix + "hi" && message.channel.id === "596210004277592066"){
                message.channel.send('hello!!!!!') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send("Hey, I only understand >bang right now. More will be added when my creator is free. :) ")
            }
        }
    }
});

bot.login(process.env.BOT_TOKEN)
