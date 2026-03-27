const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const { Canvas } = require('canvacord')

module.exports = {
  name: "rip",
  alias: [],

async execute (client, message, args){

 const user = message.mentions.users.first() || message.author;

 const avatar = user.displayAvatarURL({ format: 'png'})

 const image = await Canvas.rip(avatar)

 let imagen = new Discord.MessageAttachment(image, "rip.png")


 message.channel.send(imagen)



  

 }

}