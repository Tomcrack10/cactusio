const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const distube = require("distube")


module.exports = {
  name: "volume",
  alias: [],

execute (client, message, args){

  const serverQueue = client.distube.getQueue(message)

  if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz para usar este comando!")

 if(message.guild.me.voice.channel &&  message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo!")

 if(!serverQueue) return message.channel.send("No hay canciones reproduciendose!")

 const volume = args[0]
 if(!volume) return message.channel.send("Debes decir un volumen")
 if(volume === 'default'){
	 client.distube.setVolume(message, 100)
	  message.channel.send(`El volumen ha sido establecido a **100%**`)

	  return;
 }
 if(!isNaN) return message.channel.send("Debes decir un numero!")

 if(volume < 1) return message.channel.send("El numero debe ser mayor que 0!")
 if(volume > 100) return message.channel.send("El numero debe ser menor que 100!")


 client.distube.setVolume(message, volume)
 message.channel.send(`El volumen ha sido establecido a **${volume}%**`)


 }

}