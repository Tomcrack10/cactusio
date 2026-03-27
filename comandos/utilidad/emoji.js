const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "emoji",
  alias: ["jumbo"],

execute (client, message, args){

  if(!args[0]) return message.channel.send("Debes decirme un emoji!")

  let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
  if(!emoji) return message.channel.send("Ese no es un emoji valido!")

  const embed = new Discord.MessageEmbed()

  .setTitle("Emoji")
  .setImage(emoji.url)
  .setColor("RANDOM")

  message.channel.send(embed)


 }

}