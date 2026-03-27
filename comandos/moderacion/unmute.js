const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "unmute",
  alias: [],

async execute (client, message, args){

         const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if(!Member) return message.channel.send('Usuario no encontrado!')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muteado');

        await Member.roles.remove(role)

        message.channel.send(`${Member.displayName} Ahora esta desmuteado!`)

 }

}