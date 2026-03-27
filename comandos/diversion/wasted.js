const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const { Canvas } = require('canvacord')

module.exports = {
  name: "wasted",
  alias: [],

async execute (client, message, args){

 const user = message.mentions.users.first() || message.author;

 const avatar = user.displayAvatarURL({ format: 'png'})

 const image = await Canvas.wasted(avatar)

 let imagen = new Discord.MessageAttachment(image, "wasted.png")


 message.channel.send(imagen)



  

 }

}

//hecho con eto ap la proxima https://www.youtube.com/watch?v=HE9EwamEv2s&list=PLCGE7KnIiMtJ3TR-FSIbmWSDXs7o66Bmr&index=63