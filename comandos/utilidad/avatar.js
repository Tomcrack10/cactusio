const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "avatar",
  alias: ["av"],

execute (client, message, args){

 let usuario = message.mentions.members.first() || message.member;

 let embedavatar = new Discord.MessageEmbed()
 .setTitle(`Avatar de **${usuario.user.username}**`)
 .setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true}))
 .setFooter(`Pedido por ${message.author.tag}`)

 message.channel.send(embedavatar)
 return;

 }

}