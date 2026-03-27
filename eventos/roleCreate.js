const Discord = require('discord.js');


module.exports = async (client, roleCreate) => {

const embes = new Discord.MessageEmbed()

.setTitle(`Rol creado`)
.setDescription(`Nombre: ${roleCreate.name}\nID: ${roleCreate.id}`)
.setColor(roleCreate.hexColor)
.setFooter("yey")

client.channels.cache.get("859776186132463636").send(embes)

}