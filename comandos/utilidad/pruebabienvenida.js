const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "pruebab",
  alias: ["pruebabienvenida"],

execute (client, message, args){

	client.emit("guildMemberAdd", message.member) 

  

 }

}