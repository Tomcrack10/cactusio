const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
let cooldown = new Set();

module.exports = {
  name: "clear",
  alias: ["borrar"],

execute (client, message, args){
 
   var perms = message.member.hasPermission("MANAGE_MESSAGES")
 if(!perms) return message.channel.send("No tienes permiso para ejecutar este **comando!**")

	if(cooldown.has(message.author.id)){
		message.channel.send(`${message.author}, Espera 3s antes de volver a utilizar este comando!`)

		return;
	}

	cooldown.add(message.author.id);

	setTimeout(() => {
		cooldown.delete(message.author.id);
	},  3000);







 message.delete();
 
 const cantidad = args.join(" ")


 if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Necesito el permiso **Gestionar Mensajes**")

 if(!cantidad) return message.channel.send("Debes escribir una cantidad!")

 if(cantidad === '0') return message.channel.send("No puedes borrar 0 Mensajes!")

 message.channel.bulkDelete(cantidad).then(()=> {
	 message.channel.send(`${cantidad} mensajes borrados **Correctamente** <a:Gifcheck:855253621800960010>
 `)

 })

 }

}


//video: https://www.youtube.com/watch?v=U3p-XfzEFp0&list=PLCGE7KnIiMtJ3TR-FSIbmWSDXs7o66Bmr&index=8, minuto 3:15.