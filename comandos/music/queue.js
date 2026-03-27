const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const distube = require("distube")

module.exports = {
  name: "queue",
  alias: [],

execute (client, message, args){

  const queue = client.distube.getQueue(message)

  if(!queue) return message.channel.send("No hay canciones reproduciondose!")

  const embed = new Discord.MessageEmbed()

  .setTitle("Playlist")
  .setDescription('\n' + queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join("\n"))
  .setFooter("Playlist del servidor")
  .setColor("RANDOM")
  .setThumbnail('https://cdn.discordapp.com/attachments/850515687633584158/859244958452285460/treble-clef-g-key-symbol-of-music-black-icon-vector-id1078425632.png')

  message.channel.send(embed)


 }

}