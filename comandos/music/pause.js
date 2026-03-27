const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const distube = require("distube")

module.exports = {
  name: "pause",
  alias: [],

execute (client, message, args){

 const serverQueue = client.distube.getQueue(message)

 if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz para usar este comando!")

 if(message.guild.me.voice.channel &&  message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo!")

 if(!serverQueue) return message.channel.send("No hay canciones repoduciendose!")

 if(serverQueue.pause) return message.channel.send("La musica ya estaba detenida")

 client.distube.pause(message)


 message.channel.send("La cancion fue pausada correctamente")

  

 }

}


//video https://www.youtube.com/watch?v=ZNrMytZ4Euk&list=PLCGE7KnIiMtJ3TR-FSIbmWSDXs7o66Bmr&index=67, minuto 1:59