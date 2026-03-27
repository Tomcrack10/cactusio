const Discord = require('discord.js');

module.exports = {
  name: "say",
  alias: ["decir"],

execute (client, message, args){

  

//var perms = message.member.hasPermission("ADMINISTRATOR")
//if(!perms) return message.channel.send("No tienes el permiso para ejecutar este comando!")

let texto = args.join(' ');
if(!texto) return message.channel.send("Debes escribir algo!")
message.delete()
message.channel.send(texto)

 }

}