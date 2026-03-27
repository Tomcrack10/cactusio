const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "serverinfo",
  alias: ["serinfo"],

async execute (client, message, args){

 var server = message.guild;//definimos server


 const embed = new Discord.MessageEmbed()//creamos un embed
 .setTitle("**SERVERINFO**")//establecemos titulo
 .setDescription("**INFORMACION ACTUAL DEL SERVIDOR**")//establecemos descripcion
 .setThumbnail(server.iconURL())//aca aparecera el icono del server
 .setAuthor(server.name, server.iconURL())//aca va a aparecer el icono y nombre del server
 .addField('**ID**', server.id, true)//esto es para obtener la id del server
 .addField('**FECHA DE CREACION**',`${server.joinedAt}`)//con esto obtenemos la fecha de creacion del server
 .addField("**REGION:**", message.guild.region)//con esto obtenemos la region del server
 .addField("**OWNER DEL SERVIDOR:**",`${server.owner.user}`)//con esto obtenemos el creador del server
 .addField("** ID DEL OWNER :**",`${server.ownerID}`)//con esto la id del creador del server
 .addField(`**CANALES** [${server.channels.cache.size}]ㅤㅤ`, `Categoria: ${server.channels.cache.filter(x => x.type === "category").size} texto: ${server.channels.cache.filter(x => x.type === "text").size} voz: ${server.channels.cache.filter(x => x.type === "voice").size}`, true)
 //con esto todos los canales del servidor
 .addField('**MIEMBROS**', server.memberCount, true)//con esto obtenemos los miembros que hay en el server
 .addField("**BOTS**",`${message.guild.members.cache.filter(m => m.user.bot).size}`)//con esto obtenemos los bots del server
 .addField('**EMOJIS**',message.guild.emojis.cache.size)//con esto todos los emojis del server 
 .addField('**BOOSTER**',message.guild.premiumSubscriptionCount.toString())// con esto el numero de booster del server
 .addField('**NIVEL DE VERIFICACION**',`${server.verificationLevel}`)//con esto obtenemos el nivel de verificacion del server
 .addField('**ROLES**', server.roles.cache.size,true)//con esto la cantidad de roles
 .setColor("RANDOM")//establecemos el color  yo puse random para que salga diferente color
 message.channel.send(embed);//enviamos el embed

 }

}