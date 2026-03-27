const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const canalsgr = new db.crearDB('CanalSugerencias')

module.exports = {
  name: "canalsgr",
  alias: ["cs"],

execute (client, message, args){

	var perms = message.member.hasPermission("ADMINISTRATOR")
	if(!perms) return message.channel.send("No tienes permisos!")

	const canal = message.mentions.channels.first()
	if(!canal) return message.channel.send("Debes mencionar un canal!")
		

	message.channel.send(`Todo ha salido Bien! Las sugerencias se enviaran en ${canal}`)

	canalsgr.establecer(`${message.guild.id}`, `${canal.id}`)

  

 }

}