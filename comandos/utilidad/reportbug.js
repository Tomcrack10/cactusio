const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "reportbug",
  alias: ["rpbug"],

execute (client, message, args){

 

  const reporte = args.join(" ")
  if(!reporte) return message.channel.send("Debes decir el reporte!")

  const embed = new Discord.MessageEmbed()

  .setTitle("Reporte")
  .setDescription(`El usuario **${message.author.username}** ha hecho un reporte desde el servidor **${message.guild.name}**. Reporte: \n\n**${reporte}**`)
  .setFooter("Busca el error Para arreglarme")
  .setColor("RED")

  client.users.cache.get('590606524682993751').send(embed)
  client.channels.cache.get('858399179759943700').send(embed)
  message.channel.send("El reporte del bug fue enviado **correctamente**")

 }

}