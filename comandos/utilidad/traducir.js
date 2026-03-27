const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
traductor = require('@iamtraction/google-translate')

module.exports = {
  name: "traducir",
  alias: ["trd"],

async execute (client, message, args){
 const idiomas = ['en', 'es', 'english', 'french', 'spanish', 'portuguese', 'japanese', 'chinese', 'ja', 'italian', 'russian', 'ru', 'it', 'fr']

		
 const idioma = args[0]
 if(!idiomas.includes(idioma)) return message.channel.send("Debes poner un idioma válido!")
 if(!idioma) return message.channel.send("Debes escribir un idioma!")
 const texto = args.slice(1).join(" ")
 if(!texto) return message.channel.send("Debes escribir el texto que vas a traducir!")
 
 
  try{
         traductor(texto, {
         to: idioma
         }).then(res => {
         const embed = new Discord.MessageEmbed()
         .setTitle("Traductor!")
         .addField('Texto para traducir:', texto)
         .addField("Texto traducido:", res.text)
         .setColor("BLUE")


         message.channel.send(embed)
  
    })
 } catch(error) {
  message.channel.send("A ocurrido un error!")
  console.log(`Error comando traducir descubierto por ${message.author.tag}`)
 }
	


 }

}