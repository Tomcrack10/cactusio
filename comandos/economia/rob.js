 const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');
const dinero = new db.crearDB('dinero')

module.exports = {
  name: "rob",
  alias: ["robar"],

async execute (client, message, args){

	const user = message.author
	const persona = message.mentions.users.first()

	if(!persona) return message.channel.send("Debes mencionar a alguien!")

	let dineropersona = await dinero.obtener(`${persona.id}`)
	let dinerouser = await dinero.obtener(`${user.id}`)

	let dineroaleatorio = Math.floor(Math.random() * dineropersona) + 1
	let dineroaleatoriomio = Math.floor(Math.random() * dinerouser) + 450

	if(persona.id === message.author.id) return message.channel.send('No te puedes robar a ti mismo!')
	if(!isNaN(args[0])) return message.channel.send("Eso no es un usuario valido")

	if(dineropersona < 300) return message.channel.send("Esa persona tiene muy poco dinero como para robarle")
	if(!dinero.tiene(`${persona.id}`)) return message.channel.send("Esta persona no tiene dinero!")

	let resultadomalo = ['mal']
	let resultadobueno = ['bien']
	let resultado = [resultadomalo, resultadobueno, resultadomalo, resultadobueno]
	let resultadofinal = resultado[Math.floor(Math.random() * resultado.length)]

	//let posibilidadfinal = posibilidades[Math.floor(Math.random() * posibilidades.length)]

	if(resultadofinal === resultadobueno){
		dinero.restar(persona.id, dineroaleatorio)

		dinero.sumar(user.id, dineroaleatorio)

		message.channel.send(`Has robado a ${persona.tag} y has conseguido ${dineroaleatorio}`)
	}

	if(resultadofinal === resultadomalo){
		dinero.restar(user.id, dineroaleatoriomio)


		message.channel.send(`Has intentado robar a ${persona.tag} y has perdido ${dineroaleatoriomio}`)


	}



  

 }

}