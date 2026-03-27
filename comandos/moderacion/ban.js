const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban",
  alias: ["banear"],

execute (client, message, args){

try {

 if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes permisos para usar este comando")
 else{
  let userB = message.mentions.members.first();

  let banR = args.join(" ").slice(22)

  if(userB){
     if(userB == message.author){
         message.channel.send("No te puedes banear a ti mismo")
     }
     else{
         if(!banR){
             message.channel.send("Debes poner una razón")
         }
         else{
             userB.ban({reason: banR}).then((member) => {
		 message.channel.send(`El usuario ${args[0]} fue baneado por ${message.author}`)
                 message.channel.send(`Razón: ${banR}`)
            
        }).catch(() => {
            message.channel.send("No puedo banear a este usuario ya que su rol es mas alto que el mio! si quieres saber como colocar mi rol mas alto coloca c/rol high!");
        });

         
         }
     }
  }
  else if(!userB) return message.channel.send("Tienes que mencionar a alguien")
 }

 } catch (error) {
     message.channel.send(`\nReporta el error en el serivdor de soporte\n`+
     `Error: ${error}`)
 }

  

 }

}