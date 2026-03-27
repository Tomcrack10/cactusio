const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const niveles = new db.crearDB('niveles')
const canvacord = require("canvacord")	

module.exports = {
  name: "nivel",
  alias: ["nvl"],

async execute (client, message, args){

 var user = message.mentions.users.first() || message.author;
 
 var userM = message.author

 var id = user.id


  
  if(!niveles.tiene(`${id}`)) {
	 
	  niveles.establecer(`${id}`, {xp: 1,nivel: 1})
  }
  
  var xps = await niveles.obtener(`${id}.xp`)
  var level = await niveles.obtener(`${id}.nivel`)



   if(userM === user){
	    message.channel.send(`${user} Tu xp actual es: ${xps}  , Estas en el nivel : ${level}`)
	    
	    return;

   }
   message.channel.send(`El usuario ${user} tiene ${xps} de xp , y esta en el nivel ${level}`)

  

 }

}