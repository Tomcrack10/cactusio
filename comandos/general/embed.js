const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "embed",
  alias: ["emb"],

execute (client, message, args){

  var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("No tienes el permiso para ejecurae mensajes\nPermiso faltante **Gestionar Mensajes/ Manage Messages**")

  let texto = args.join(' ');
  if(!texto) return message.channel.send("Debes escribir lo que contendra el embed!")
  let opciones = texto.split(' >> ')

  const embed = new Discord.MessageEmbed()

  .setTitle(opciones[0])
  .setDescription(opciones[1])
  .setFooter(opciones[2])
  .setColor(opciones[3])

  message.channel.send(embed)

 }

}