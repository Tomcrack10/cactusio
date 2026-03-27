const Discord = require('discord.js');

module.exports = async (client, roleDelete) => {

const embed = new Discord.MessageEmbed()

.setTitle("Rol eliminado.")
.setDescription(`Nombre: ${roleDelete.name}\nID: ${roleDelete.id}`)
.setColor(roleDelete.hexColor)

client.channels.cache.get("859776186132463636").send(embed)

}