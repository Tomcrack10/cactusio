const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const peo = new db.crearDB("peo")
const canvacord = require("canvacord")
const canalbnv = new db.crearDB("CanalBienvenidas")



module.exports = async (client, member, message, args) => {

  const canal = await canalbnv.obtener(member.guild.id)
  const canalb = client.channels.cache.get(canal)

    if(!canalbnv.tiene(`${member.guild.id}`)){
	  return;
  }
  const nombredelser = member.guild.name

  const welcomecard = new canvacord.Welcomer()
  .setUsername(member.user.username)
  .setDiscriminator(member.user.discriminator)
  .setAvatar(member.user.displayAvatarURL({format: "png"}))
  .setColor("title", "#039dfc")
  .setColor("username-box", "#9803fc")
  .setColor("discriminator-box", "#9803fc")
  .setColor("message-box", "#9003fc")
  .setColor("border", "#9003fc")
  .setColor("avatar", "#9003fc")
  .setBackground("https://images.unsplash.com/photo-1522865080725-2a9ea1fcb94e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNTYwNjEwfHxlbnwwfHx8fA%3D%3D&w=1000&q=80")
  .setMemberCount(member.guild.memberCount)
  .setText("title", "Bienvenido!")
  .setText("message", `Bienvenido a  ${nombredelser}`)
  .setText("member-count", "- Miembro numero {count}")
  let attachment = new Discord.MessageAttachment(await welcomecard.build(), "bienvenido.png")
  client.channels.cache.get(canal).send(member.user.toString(), attachment)

  //if(peo.tiene(member.guild.id)){

    //if(!member.guild.me.hasPermission("KICK_MEMBERS")) return;

    //member.guild.member(member).kick("El sistema de antijoins estaba activado")
  //}
  //if(!peo.tiene(member.guild.id)){
    //return;
  //}

}