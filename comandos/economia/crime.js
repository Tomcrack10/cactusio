const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');
const dinero = new db.crearDB('dinero')
var MAXC = 375
var MINC = 100

module.exports = {
  name: "crime",
  alias: ["crimen"],

execute (client, message, args){

	const user = message.author

	if(!dinero.tiene(`${user.id}`)){
		dinero.establecer(`${user.id}`, 0)
	}

  let crimenes = ["ha robado un banco", "robo una joyeria", "Robo una tienda"]

  let crimenesmalos = ['ha robado un banco, pero lo descubrieron', 'robo una joyeria, no escapo por lo que fue atrapado', 'Robo una tienda, Pero la policia lo atrapo']

  let resultadosbuenos = crimenes[Math.floor(Math.random() * crimenes.length)]

  let resultadosmalos = crimenesmalos[Math.floor(Math.random() * crimenesmalos.length)]

  let resultados = [resultadosbuenos, resultadosmalos]

  let resultadofinal = resultados[Math.floor(Math.random() * resultados.length)]

  let dinerobueno = Math.floor(Math.random() *  (MAXC - MINC + 1) + MINC)

  let dineromalo = Math.floor(Math.random() *  (-MAXC - MINC + 1) + -MINC)

  if(resultadofinal === resultadosbuenos){

	  dinero.sumar(`${user.id}`, dinerobueno)

	  const embed = new Discord.MessageEmbed()

	  .setTitle("Crimen")
	  .setDescription(`${user} ${resultadosbuenos} y ha ganado **${dinerobueno}$**`)
	  .setColor("GREEN")

	  message.channel.send(embed)

	  return;
  }

  if(resultadofinal === resultadosmalos)

  dinero.sumar(`${user.id}`, dineromalo)

  const embed = new Discord.MessageEmbed()

  .setTitle("Crimen")
  .setDescription(`${user} ${resultadosmalos} y ha perdido **${dineromalo}$**`)
  .setColor("RED")

  message.channel.send(embed)

  return;

 }

}


//video https://www.youtube.com/watch?v=JL6bXxNstto&list=PLCGE7KnIiMtJ3TR-FSIbmWSDXs7o66Bmr&index=19, minuto 12:23.