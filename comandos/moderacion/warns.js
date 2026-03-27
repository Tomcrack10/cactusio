const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
  name: "warns",
  alias: ["avisos"],

async execute (client, message, args){

  var perms = message.member.hasPermission("KICK_MEMBERS")
  if(!perms) return message.channel.send("No tienes permisos!")

  let persona = message.mentions.users.first()
  if(!persona) return message.channel.send("Debes mencionar a alguien!")

  let cantidad = await warns.obtener(`${message.guild.id}.${persona.id}`)

  if(!warns.tiene(`${message.guild.id}.${persona.id}`)){
	  message.channel.send("Este usuario no tiene warns! GG")

	  return;
  }

  message.channel.send(`**${persona}** tiene **${cantidad}** de warns`)

 }

}