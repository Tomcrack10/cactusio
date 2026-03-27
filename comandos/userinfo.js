const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "userinfo",
  alias: ["sinfo"],

execute (client, message, args){

  let estados = {
	  "online": "🟢 En linea",
	  "idle": "🌙 Ausente",
	  "dnd": "⛔ No molestar",
	  "offline": "⚪ Desconectado"
  };

  const member = message.mentions.members.first() || message.member

  function formatDate (template, date){
  var tiempo = 'YYY:MM:DD:HH:MM:SS'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {

  }, template)
  }

  const embedinfo = new Discord.MessageEmbed()

  .setColor("ORANGE")
  .setDescription(`**Informacion de ${member}:**`)
  .addField(`**Nombre:**`, `**${member.user.tag}**`)
  .addField("**ID:**", `**${member.user.id}**`)
  .addField("**Apodo del usuario:**", `${member.nickname !== null ? `${member.nickname}`: 'Ninguno'}`)
  //.addField("Union Al Servidor:", formatDate('DD/MM/YYY, a las HH:MM:SS', member.joindate))
  .addField("**ROLES:**", member.roles.cache.map(roles => `\`${roles.name}\``).join(','))
  .addField("**Boost:**", member.premiumSince ? 'Usuario Booster' : 'Usuario No Booster')
  .addField("Estado", estados[member.user.presence.status])
  .setThumbnail(member.user.displayAvatarURL( {format: 'png', dynamic: 'true'} ))

  message.channel.send(embedinfo)

 }

}