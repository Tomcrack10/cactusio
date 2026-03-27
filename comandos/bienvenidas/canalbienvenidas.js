const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
const canalbnv = new db.crearDB('CanalBienvenidas')

module.exports = {
  name: "canalbienvenidas",
  alias: ["canalbnv"],

execute (client, message, args){

	var perms = message.member.hasPermission("ADMINISTRATOR")
	if(!perms) return message.channel.send("No tienes permisos!")

	const canal = message.mentions.channels.first()
	if(!canal) return message.channel.send("Debes mencionar un canal!")
		

	message.channel.send(`Todo ha salido Bien! Las bienvenidas se enviaran en ${canal}`)

	canalbnv.establecer(`${message.guild.id}`, `${canal.id}`)
	

  

 }

}