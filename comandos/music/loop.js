const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const distube = require("distube")

module.exports = {
  name: "loop",
  alias: ["repeat"],

execute (client, message, args){

  const queue = client.distube.getQueue(message)

  if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz!")

  if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo!")

  if(!queue) return message.channel.send("No hay canciones reproduciendose")

  const opcion = args[0]
  if(!opcion) return message.channel.send("Debes escribir una opcion (0 / 1 / 2)")

 if(opcion !== '0'){
	 if(opcion !== '1'){
		 if(opcion !== '2'){
			 return message.channel.send("Eso no es una opcion valdia")
		 }
	 }
 }
	   
  if(opcion === '0'){
	  client.distube.setRepeatMode(message, 0)
	  message.channel.send("La repeticion ha sido **Desactivada**")
	  return;
  }
  if(opcion === '1'){
	  client.distube.setRepeatMode(message, 1)
	  message.channel.send("La repeticion para esta cancion ha sido **Activada**")
	  return;

  }
 if(opcion === '2'){
	 client.distube.setRepeatMode(message, 2)
	 message.channel.send("Se ha activado la repeticion de la **Playlist Entera**")
	 return;
 }
 

 }

}