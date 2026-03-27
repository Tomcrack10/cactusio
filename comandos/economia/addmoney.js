const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');
const dinero = new db.crearDB('dinero')
const dinerobanco = new db.crearDB('dinerobanco')

module.exports = {
  name: "addmoney",
  alias: ["adm"],

execute (client, message, args){
  
 if(message.author.id !== '590606524682993751') return message.channel.send("No puedes ejecutar este comando!")
  
  let user = message.mentions.members.first()
  if(!user) return message.channel.send("Debes mencionar a alguien!")

  if(!dinero.tiene(user.id)){
	  dinero.establecer(user.id, 0)
  }
  const dinerocantidad = args.slice(1).join(" ")

  if(!dinerocantidad) return message.channel.send("Debes decir que cantidad añadiras!")

  dinero.sumar(user.id, dinerocantidad)  

  message.channel.send(`El usuario **${user}** ha recibido **${dinerocantidad}$**`)

 }

}