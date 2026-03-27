const Discord = require('discord.js');

module.exports = {
  name: "send",
  alias: ["enviar"],

execute (client, message, args){

  

 var perms = message.member.hasPermission("ADMINISTRATOR")
 if(!perms) return message.channel.send("Debes Ser un admin para utilizar este comando!")

 let canal = message.mentions.channels.first()
 if(!canal) return message.channel.send("Debes mencionar un canal!")

 let texto = args.slice(1).join(" ")
if(!texto) return message.channel.send("Debes Escribir Un texto!")

 canal.send(texto)

 }

}