const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "invite",
  alias: ["invi"],

execute (client, message, args){

  message.channel.send("Con este link me puedes invitar!: https://bit.ly/3q5wxrd")

 }

}