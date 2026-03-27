const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');
const dinero = new db.crearDB('dinero')
const dinerobanco = new db.crearDB('dinerobanco')

module.exports = {
  name: "dep",
  alias: [],

async execute (client, message, args){
	
	const cantidad = args[0]

	const user = message.author;

	const dinerot = await dinero.obtener(`${user.id}`)

	if(!dinero.tiene(`${user.id}`)){
		dinero.establecer(`${user.id}`, 0)
		
	}

	
	if(!dinerobanco.tiene(`${user.id}`)){
		dinerobanco.establecer(`${user.id}`, 0)
		
	}


 if(cantidad > dinerot) return message.channel.send("No tienes tantas monedas!")

	

 
 if(!cantidad) return message.channel.send("Debes decir una cantidad!")

 if(cantidad === 'all'){
	 const dinerototal = await dinero.obtener(`${user.id}`)
	 dinero.restar(`${user.id}`, dinerototal)
	 dinerobanco.sumar(`${user.id}`, dinerototal)
	 message.channel.send(`Has guardado ${dinerototal}`)
	 return;
}
 
if(!cantidad > -1){
	message.channel.send('Debe ser un numero!')
	return;
}

 dinero.restar(`${user.id}`, cantidad)
 dinerobanco.sumar(`${user.id}`, cantidad)

 message.channel.send(`Guardaste ${cantidad} monedas en el banco`)
 
 }
 

}