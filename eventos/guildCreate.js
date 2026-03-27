const Discord = require('discord.js');

module.exports = async (client, guildCreate) => {

const embed = new Discord.MessageEmbed()

.setTitle("**Cactusio Fue añadido a un nuevo servidor**")
.addField(`**Nombre:**`, guildCreate.name)
.addField("**Miembros**", guildCreate.memberCount)
.addField("**ID:**", guildCreate.id)
.addField("**Dueño:**", guildCreate.owner.user.tag)
.setThumbnail(guildCreate.iconURL())
.setColor("RANDOM")

client.channels.cache.get("859497461181579285").send(embed)
}