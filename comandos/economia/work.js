const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db  = require('megadb');
const dinero = new db.crearDB('dinero')
const dinerobanco = new db.crearDB('dinerobanco')
const masdinero = new db.crearDB('masdinero')	
var MAX = 365
var MIN = 100

let cooldown = new Set();

module.exports = {
  name: "work",
  alias: ["w"],

async execute (client, message, args){


	if(cooldown.has(message.author.id)){
		message.channel.send(`${message.author}, Espera 3s antes de volver a utilizar este comando!`)

		return;
	}

	cooldown.add(message.author.id);

	setTimeout(() => {
		cooldown.delete(message.author.id);
	},  3000);


  const user = message.author;

 if(!dinero.tiene(`${user.id}`)){
	 dinero.establecer(`${user.id}`, 0)
 }

 if(!dinerobanco.tiene(`${user.id}`)){
	 dinerobanco.establecer(`${user.id}`, 0)
 }
   

  let random = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
  let randomaumentado = Math.floor(Math.random() * 10075) + 900


  let trabajo = ["policia", "profesor", "veterinario"]
  let randomtrabajo = trabajo[Math.floor(Math.random() * trabajo.length)]
  let objetodinero = await masdinero.obtener(`${user.id}`)

  if(objetodinero > 0){
	  dinero.sumar(`${user.id}`, randomaumentado)
	  masdinero.restar(`${user.id}`, 1)

         const embed = new Discord.MessageEmbed()

         .setTitle("Trabajo")
         .setDescription(`El usuario **${user}** ha Trabajado de **${randomtrabajo}** y gano **${randomaumentado}$**`)
          .setColor("RANDOM")

         message.channel.send(embed)

	 return;
  }

  dinero.sumar(`${user.id}`, random)

  const embed = new Discord.MessageEmbed()

  .setTitle("Trabajo")
  .setDescription(`El usuario **${user}** ha Trabajado de **${randomtrabajo}** y gano **${random}$**`)
  .setColor("RANDOM")

  message.channel.send(embed)

 }

}