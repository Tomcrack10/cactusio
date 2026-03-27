const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
  name: "shop",
  alias: ["shp"],

execute (client, message, args){

  const embed = new Discord.MessageEmbed()

  .setTitle("**Tienda**")
  .setDescription(`Mas dinero en el comando c/work\nPrecio: 6500\nNombre de compra: dinero\nMascota Gato\nPrecio: 15000\nNombre de compra: Gato\nMedalla bronce\nPrecio:20000\nNombre de compra: medallab`)
  .setColor("BLUE")

  message.channel.send(embed)

 }

}