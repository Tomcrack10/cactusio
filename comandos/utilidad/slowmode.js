const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
  name: "slowmode",
  alias: ["slw"],

async execute (client, message, args){

  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("no tienes permisos suficientes!")

  let channel = message.channel

  let time = args[0]

  var tiempoS = time
  

  if(time === 'off'){
	  channel.setRateLimitPerUser(0)

	  return message.channel.send("El **Slowmode** para este canal ha sido **desactivado!**")
  }

  if(!time) return message.channel.send("Debes escribir un tiempo en segundos,horas o minutos!, Ejemplo 1h 1m 1s")

  let convert = ms(time)
  let toSecond = Math.floor(convert / 1000)

  if(!toSecond || toSecond === undefined) return message.channel.send("Debes poner un tiempo valido!")

  if(convert > 21600000) return message.channel.send("No puedes poner **slowmode** de mas de 6 horas!")

  await channel.setRateLimitPerUser(toSecond)

  message.channel.send(`El **slowmode** Para este canal ahora es de **${convert}** osea **${time}**`)

 }

}

//Comando tara en moderacion