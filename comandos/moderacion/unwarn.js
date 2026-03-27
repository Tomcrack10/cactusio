const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')

const warns = new db.crearDB('warns')


module.exports = {
  name: "unwarn",
  alias: [],

async execute (client, message, args){

	var perms = message.member.hasPermission("KICK_MEMBERS")
	if(!perms) return message.channel.send("No tienes suficientes permisos!")

 const user = message.mentions.members.first()

 if(!user) return message.channel.send("Debes mencionar un usuario!")

 if(!warns.tiene(`${message.guild.id}.${user.id}`)){
	 warns.establecer(`${message.guild.id}.${user.id}`, 0)

	 message.channel.send("Esta persona no tiene warns!")
 }

 const cantidad = await warns.obtener(`${message.guild.id}.${user.id}`)

 if(cantidad < 1) return message.channel.send("Esta persona no tiene warns!")

 warns.restar(`${message.guild.id}.${user.id}`, 1)

 message.channel.send(`El usuario **${message.author.username}** le ha quitado un warn a **${user}**`)
  

 }

}

//ME QUEDE EN el 25 de 06 de 2021 https://www.youtube.com/watch?v=Q_TTekZzVZE&list=PLCGE7KnIiMtJ3TR-FSIbmWSDXs7o66Bmr&index=46