const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const cosa = new db.crearDB('CanalSugerencias')

module.exports = {
  name: "sugerencia",
  alias: ["sg"],

async execute (client, message, args){

  const canal = await cosa.obtener(`${message.guild.id}`, `${message.channel.id}`)
  const canalsugerencia = client.channels.cache.get(canal)

  if(!cosa.tiene(`${message.guild.id}`, `${message.channel.id}`)){
	  message.channel.send("Este servidor no tiene ningun canal establecido!")

	  return;
  }

  const usuario = message.author

  const sugerencia = args.join(" ")

  const embed = new Discord.MessageEmbed()

  .setTitle("Ha llegado una nueva sugerencia!")
  .setAuthor(usuario.tag, message.author.displayAvatarURL())
  .setDescription(`${sugerencia}`)
  .setColor("RANDOM")
  .setFooter("Si quieres sugerir algo escribe c/sugerencia o c/sg.")

  const embedbueno = new Discord.MessageEmbed()

  .setTitle("Todo ha salido bien!")
  .setDescription("La sugerencia fue enviada al canal establecido!")
  .setColor("GREEN")

  message.channel.send(embedbueno)

  canalsugerencia.send(embed).then(async msg => {
	  await msg.react('✅')
	  await msg.react('❌')
  })



 }

}


///lo que quede https://www.youtube.com/watch?v=QHeBptWtqag&list=PLCGE7KnIiMtJ3TR-FSIbmWSDXs7o66Bmr&index=14