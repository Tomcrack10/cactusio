const Discord = require('discord.js')
const db = require('megadb')

const niveles = new db.crearDB("niveles");

module.exports = async (client, message) => {

  let prefix = 'c/'

  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
	  message.channel.send(`Hola! Soy cactusio mi prefix es c/! Si quires ver mis comandos escribe c/help! si quieres reportar algun bug o entrar a mi servidor de soporte pon c/support!`)
  }

  if(message.author.bot) return;

  
 
  
//xp
if(message.channel.type === 'dm'){
  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  if(message.content.includes('invite')) message.channel.send("https://top.gg/bot/711954183896563745")

  if(message.content.includes('ayuda')) message.channel.send("Para ver mis comandos de ayuda escribe .ayuda")

  return message.channel.send("No respondo a comandos en mensajes directos.")
}

if(!niveles.tiene(`${message.author.id}`)){
niveles.establecer(message.author.id, {xp: 1,nivel: 1})
}

if(!message.content.startsWith(prefix)){
var xps = await niveles.obtener(`${message.author.id}.xp`)
var level = await niveles.obtener(`${message.author.id}.nivel`)
var lvlLlegar = level * 25

if(xps >= lvlLlegar){
	const userlvl = message.member
	niveles.establecer(message.author.id, {xp:0,nivel: level+1})
	
	const embed = new Discord.MessageEmbed()
	.setTitle(`${message.author.username} Subiste de nivel!`)
	.setDescription(`Has subido a nivel ${level+1}!`)
	.setThumbnail(userlvl.user.displayAvatarURL( {format: 'png', dynamic: 'true'}))

	message.channel.send(embed)
}

niveles.sumar(`${message.author.id}-xp`, 2,"-")
}


if(!message.content.startsWith(prefix)) return;


let usuario = message.mentions.members.first() || message.member; 
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

//if(command === 'peo'){}

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if(cmd){
 cmd.execute(client, message, args)
}
if(!cmd){
  const embed = new Discord.MessageEmbed()

  .setTitle("Oops.")
  .setDescription("Ese comando no existe.")
  .setColor("RED")

  message.channel.send(embed)
}


}