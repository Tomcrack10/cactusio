const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');
const masdinero = new db.crearDB('masdinero')

module.exports = {
  name: "mejoras",
  alias: ["mjr"],

async execute (client, message, args){

	let user = message.mentions.members.first() || message.member


	if(!masdinero.tiene(`${user.id}`)){
		masdinero.establecer(`${user.id}`, 0)
	}


  


  const mejorasuser = await masdinero.obtener(`${user.id}`)


  message.channel.send(`El usuario ${user} tiene ${mejorasuser} mejoras`)

  

 }

}