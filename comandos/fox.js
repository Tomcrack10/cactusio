const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const apitenor = process.env["tenorapi"]
const fetch = require('node-fetch');
const tenorapi = (apitenor)

module.exports = {
  name: "bear",
  alias: ["oso"],

async execute (client, message, args){

    fetch(`https://api.tenor.com/v1/random?key=${tenorapi}&q=bear&limit=1`)
      .then(res => res.json())
      .then(json => message.channel.send(json.results[0].url))
      .then(json => message.channel.send('**Aca tienes un osito :3**'))
      .catch(err => {
        message.channel.send('La solicitud para encontrar un osito falló :(');
        return console.error(err);
      })
  

 }

}