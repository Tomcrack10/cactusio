const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "random",
  alias: ["aleatorio"],

execute (client, message, args){

  var palabras = ['Cactusio Sio', 'Cat Bot Compañero', 'Batalla de prefixes', 'Batalla de bots']

  const palabrafinal = palabras[Math.floor(Math.random() * palabras.length)]

  message.channel.send(palabrafinal)

 }

}