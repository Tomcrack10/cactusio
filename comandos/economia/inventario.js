const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');
const dinero = new db.crearDB('dinero')
const masdinero = new db.crearDB('masdinero')
const medallaplata = new db.crearDB('medallaplata')
const medallabronce = new db.crearDB('medallabronce')
const mascotas = new db.crearDB('mascotasUser')

module.exports = {
  name: "inventario",
  alias: ["inv"],

async execute (client, message, args){
 
 const user = message.mentions.users.first() || message.author

  const medallapuser = await medallaplata.obtener(`${user.id}`)
   const medallabuser = await medallabronce.obtener(`${user.id}`)

  var medallaplatas = 'no'
  var medallabronces = 'no'

 if(!medallaplata.tiene(`${user.id}`)){
		medallaplata.establecer(`${user.id}`, 0)
        }
 if(!medallabronce.tiene(`${user.id}`)){
		medallabronce.establecer(`${user.id}`, 0)
        }
 if(medallapuser > 0){
	 var medallaplatas = 'Si'
 }
 else{
	 var medallaplatas = 'No'
 }
  if(medallabuser > 0){
	 var medallabronces = 'Si'
 }
 else{
	 var medallabronces = 'No'
 }

 const embed = new Discord.MessageEmbed()
 .setTitle(`Inventario de **${user.username}**`)
  .addField(`Tiene medalla bronce`, medallabronces)
 .addField(`Tiene medalla de plata:`, medallaplatas)


 message.channel.send(embed)

  //https://www.npmjs.com/package/megadb

 }

}