const Discord = require('discord.js');

module.exports = async (client, oldRol, newRol) => {

if(oldRol.name !== newRol.name){
  const embed = new Discord.MessageEmbed()

  .setTitle("Rol actualizado")
  .setDescription(`Antiguo nombre: **${oldRol.name}**\nNuevo nombre: **${newRol.name}**`)
  .setColor(newRol.hexColor)

  client.channels.cache.get('859776186132463636').send(embed)
}

if(oldRol.position !== newRol.position){
  const embed = new Discord.MessageEmbed()

  .setTitle("Posicion actualizada")
  .setDescription(`Rol: ${newRol.name}\nAntigua posicion: **${oldRol.position}**\nNueva posicion: **${newRol.position}**`)
  .setColor(newRol.hexColor)

  client.channels.cache.get("859776186132463636").send(embed)
}

if(oldRol.hexColor !== newRol.hexColor) {
  const embed = new Discord.MessageEmbed()

  .setTitle("Color actualizado")
  .setDescription(`Rol: ${newRol.name}\nAntiguo color: **${oldRol.hexColor}**\nNuevo color: **${newRol.hexColor}**`)
  .setColor(newRol.hexColor)

  client.channels.cache.get("859776186132463636").send(embed)
}

}