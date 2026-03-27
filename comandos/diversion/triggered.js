const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const { Canvas } = require('canvacord')

module.exports = {
  name: "triggered",
  alias: [],

async execute (client, message, args){

 const user = message.mentions.users.first() || message.author;

 const avatar = user.displayAvatarURL({ format: 'png'})

 const image = await Canvas.trigger(avatar)

 let imagen = new Discord.MessageAttachment(image, "triggered.gif")


 message.channel.send(imagen)



  

 }

}

//https://www.npmjs.com/package/canvacord 
//UWU