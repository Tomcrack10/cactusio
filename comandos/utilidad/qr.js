const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const canvacord = require('canvacord')
const qrcode = require('qrcode')

module.exports = {
  name: "qr",
  alias: ["qrcode"],

async execute (client, message, args){
  let qrtext = args.join(" ");
  if(!qrtext) return message.channel.send("Debes colocar un texto!")
  let image = await qrcode.toBuffer(qrtext)

  message.channel.send(new Discord.MessageAttachment(image, "codigoqr.png"))
  
  
  message.channel.send((`Texto: ${qrtext}`))

 }

}