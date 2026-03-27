const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "support",
  alias: ["soporte"],

execute (client, message, args){

  message.channel.send("Aca tienes mi servidor de soporte! https://discord.com/invite/hFYeJETpXT")

 }

}