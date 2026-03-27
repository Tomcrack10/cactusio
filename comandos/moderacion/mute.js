const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
  name: "mute",
  alias: [],

async execute (client, message, args){


if(!message.user.id === "590606524682993751"){

  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('No tienes permiso para usar este comando!')

}
   
     const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
       if(!Member) return message.channel.send('Usuario no encontrado')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muteado')
        if(!role) {
            try {
                message.channel.send('El rol muteado no se ha encontrado, se creara en este momento')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muteado',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Rol muteado creado!')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muteado')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} Ya estaba muteado!`)
        await Member.roles.add(role2)
        message.channel.send(`${Member.displayName} Esta ahora muteado!`)

  

 }

}

//Gracias ;) https://github.com/reconlx/discord.js-tutorials/blob/%2317-Mute-/-Unmute-/-Tempmute/mute.js  guardalo tom pa entender
//canal que tre sirve de ete señor https://www.youtube.com/c/reconlxx/videos