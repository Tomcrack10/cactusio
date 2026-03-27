const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('megadb');


require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
app.get("/", function (request, response) {
response.sendFile(__dirname + '/Pagina.html');});
app.listen(port, () => console.log(`Todo bien, todo correcto :D`));

const { Collection, Guild } = require('discord.js');
const keepAlive = require('./server.js');

const fs = require('fs');
let { readdirSync } = require('fs');



//handler

client.commands = new Discord.Collection();

const generalCommandFiles = fs.readdirSync('./comandos/general').filter(file => file.endsWith('.js'));//variable para los comandos de general

const economiaCommandFiles = fs.readdirSync('./comandos/economia').filter(file => file.endsWith('.js'));//variable comandos economia

const utilidadCommandFiles = fs.readdirSync('./comandos/utilidad').filter(file => file.endsWith('.js'));//variable comandos utilidad

const diversionCommandFiles = fs.readdirSync('./comandos/diversion').filter(file => file.endsWith('.js'));//variable comandos diversion

const moderacionCommandFiles = fs.readdirSync('./comandos/moderacion').filter(file => file.endsWith('.js'));//variable comandos moderacion

//const musicCommandFiles = fs.readdirSync('./comandos/music').filter(file => file.endsWith('.js'));//variable comandos moderacion

const bienvenidasCommandFiles = fs.readdirSync('./comandos/bienvenidas').filter(file => file.endsWith('.js'));//variable comandos moderacion

const commandFiles = fs
	.readdirSync('./comandos')
	.filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./comandos/${file}`);
	client.commands.set(command.name, command);
}
for (const file of generalCommandFiles) { //Apartado de handler subcarpetas general
	const command = require(`./comandos/general/${file}`);
	client.commands.set(command.name, command);
}
for (const file of economiaCommandFiles) { //Apartado de handler subcarpetas general
	const command = require(`./comandos/economia/${file}`);
	client.commands.set(command.name, command);
}

for (const file of utilidadCommandFiles) { //Apartado de handler subcarpetas general
	const command = require(`./comandos/utilidad/${file}`);
	client.commands.set(command.name, command);
}
for (const file of diversionCommandFiles) { //Apartado de handler subcarpetas general
	const command = require(`./comandos/diversion/${file}`);
	client.commands.set(command.name, command);
}
for (const file of moderacionCommandFiles) { //Apartado de handler subcarpetas general
	const command = require(`./comandos/moderacion/${file}`);
	client.commands.set(command.name, command);
}
for (const file of bienvenidasCommandFiles) { //Apartado de handler subcarpetas general
	const command = require(`./comandos/bienvenidas/${file}`);
	client.commands.set(command.name, command);
}
//for (const file of musicCommandFiles) { //Apartado de handler subcarpetas general
	//const command = require(`./comandos/music/${file}`);
	//client.commands.set(command.name, command);
//}
for(const file of readdirSync('./eventos')){
  if(file.endsWith('.js')){
    let fileName = file.substring(0, file.length - 3)

    let fileContents = require(`./eventos/${file}`)

    client.on(fileName, fileContents.bind(null, client))
  }
}



///////////////////////////BOT////////////////

client.on("ready", async (peo) => {
  
  const array = [
  {
    name: `Cactusio adventure`,
    type: `PLAYING`
  },
  {
    name: `Cactusio Music`,
    type: `LISTENING`
  }
  
  ]
	  
	  setInterval(() => {
        function presence() {
            client.user.setPresence({
              status: 'online',
                activity: array[Math.floor(Math.random() * array.length)],
            });
        }

        //Suscribite a Tomcrack Creador de Cactusio
        presence();
        
    }, 10000);

    console.log("Estoy listo!")
	console.log(`${client.guilds.cache.size} Servers`)
});


const token = process.env["Prueba"]

const link = process.env["uri"]




client.login(token)