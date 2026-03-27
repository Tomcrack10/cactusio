const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
  name: "tempmute",
  alias: ["tmute"],

async execute (client, message, args){

        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('No tienes permiso para ejecutar este comando!')
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.channel.send('Usuario no encontrado!')
        if(!time) return message.channel.send('Debes poner un tiempo!')
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muteado')
        if(!role) {
            try {
                message.channel.send('Rol muteado no encontrado se creara ahora!')

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
                message.channel.send('Rol muteado creado con exito!')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muteado')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} Ya estaba muteado!`)
        await Member.roles.add(role2)
        message.channel.send(`${Member.displayName} Ahora esta muteado!`)

        setTimeout(async () => {
            await Member.roles.remove(role2)
            message.channel.send(`${Member.displayName} Ahora esta desmuteado!`)
        }, ms(time))

 }

}