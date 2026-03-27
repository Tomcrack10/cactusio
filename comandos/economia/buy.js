const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')
const masdinero = new db.crearDB('masdinero')
const medallaplata = new db.crearDB('medallaplata')
const mascotasUser = new db.crearDB("mascotasUser")
const medallabronce = new db.crearDB('medallabronce')


let cooldown = new Set();

module.exports = {
  name: "buy",
  alias: ["comprar"],

async execute (client, message, args){

	if(cooldown.has(message.author.id)){
		message.channel.send(`${message.author}, Espera 15s antes de volver a utilizar este comando!`)
		return;
	}

	cooldown.add(message.author.id);

	setTimeout(() => {
		cooldown.delete(message.author.id);
	},   15000);


	const user = message.author;

	const objeto = args.join(' ')
	if(!objeto) return message.channel.send("Debes escribir lo que vas a comprar!")

	if(!masdinero.tiene(`${user.id}`)){
		masdinero.establecer(`${user.id}`, 0)
	}

	if(!medallaplata.tiene(`${user.id}`)){
		medallaplata.establecer(`${user.id}`, 0)
	}

	if(!mascotasUser.tiene(`${user.id}`)){
		mascotasUser.establecer(`${user.id}`, {mascotas: 'ninguna'})
	}


	const dinerouser = await dinero.obtener(`${user.id}`)

	const medallapuser = await medallaplata.obtener(`${user.id}`)

	const mascotasUsuario = await mascotasUser.obtener(`${user.id}.mascotas`)

	const medallabuser = await medallabronce.obtener(`${user.id}`)


	if(objeto === 'dinero'){
		
		if(dinerouser < 6500) return message.channel.send("No tienes suficiente dinero!")

		dinero.sumar(`${user.id}`, -6500)

		masdinero.sumar(`${user.id}`, 1)

		message.channel.send('Has comprado una mejora para el comando work!')
	}

	if(objeto === 'medallap'){
		
		if(dinerouser < 50000) return message.channel.send("No tienes suficiente dinero!")

		if(medallapuser > 0) return message.channel.send("Solo puedes tener una medalla de plata!") 

		dinero.sumar(`${user.id}`, -10000)

		medallaplata.sumar(`${user.id}`, 1)

		message.channel.send('Has comprado la medalla de plata!')
	}

	if(objeto === 'gato'){
		if(dinerouser < 15000) return message.channel.send("No tienes suficiente dinero!")

		dinero.sumar(`${user.id}`, -15000)

		
		
		if(mascotasUsuario === 'ninguna'){

		 mascotasUser.establecer(user.id, {mascotas: 'gato'})


		}

			


		const embed = new Discord.MessageEmbed()
		
		.setTitle(`Compraste un gatito!`)
		.setThumbnail(`https://i.pinimg.com/originals/46/37/63/4637632aa50dec67576174f269915e11.png`)

		message.channel.send(embed)

		}


		if(objeto === 'medallab'){
		
		if(dinerouser < 20000) return message.channel.send("No tienes suficiente dinero!")

		if(medallabuser > 0) return message.channel.send("Solo puedes tener una medalla de plata!") 

		dinero.sumar(`${user.id}`, -10000)

		medallabronce.sumar(`${user.id}`, 1)

		message.channel.send('Has comprado la medalla de bronce!')
	}






		
	}





  

 }