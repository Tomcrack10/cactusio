const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
  name: "warn",
  alias: ["avisar"],

execute (client, message, args){

 var perms = message.member.hasPermission("KICK_MEMBERS")
 if(!perms) return message.channel.send("No tienes permisos suficientes!")

  let persona = message.mentions.users.first()
  if(!persona) return message.channel.send("Debes mencionar a alguien!")

  var razon = args.slice(1).join(" ")
  if(!razon){
	  razon = 'No especificada'
  }

  if(persona.id === '764741499182252082'){
	  message.channel.send("no puedes ejecutar el comando warn ya que fuiste baneado temporalmente de estos")
  }

if(!warns.tiene(`${message.guild.id}.${persona.id}`))
 warns.establecer(`${message.guild.id}.${persona.id}`, 0)

 warns.sumar(`${message.guild.id}.${persona.id}`, 1)

 message.channel.send(`El moderador **${message.author.tag}** aviso a **${persona.tag}** por **${razon}**`)

 persona.send(`Te han avisado en el servidor **${message.guild.name}** por **${razon}**`)
 

 //Importante ahorita hacer SISTEMA SI EL ROL ES MA ALTO O IGUAL NO PUEDA AHORITA LO HAGO XD TENGO UQ EBUSCAR UN CODIGO QUE SI ESO PUES TAMPOCO XD


 }

}