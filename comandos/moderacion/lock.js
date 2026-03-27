const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "lock",
  alias: ["lck"],

execute (client, message, args){

  var perms = message.member.hasPermission('MANAGE_CHANNELS')

   if(!perms) return message.channel.send("No tienes suficientes permisos!")

   if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("No tengo suficientes permisos como para bloquear el canal! (El permiso faltante es Administrar canales)")

   const everyone = message.guild.roles.cache.find(
      peo => peo.name === '@everyone'
   );

   message.channel.updateOverwrite(everyone, { SEND_MESSAGES: false})

   message.channel.send("**El canal fue bloqueado con exito!**")

 }

}