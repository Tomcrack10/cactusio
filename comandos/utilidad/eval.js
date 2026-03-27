const Discord = require("discord.js");
const { inspect } = require("util")

module.exports = {
  name: "eval",
  alias: ["e"],

async execute (client, message, args){
  
    const command = args.join(" ")

    if(!["590606524682993751"].includes(message.author.id))
    return message.channel.send("<a:negativo:833312184619761714> | No puedes usar este comando")

    if(!command) return message.channel.send("Especifica que vas a evaluar!")

   
    try{
        const evaled = eval(command)
        
        const embed = new Discord.MessageEmbed()
        .setColor("#0CFF00")
        .setTitle("**Evaluado correctamente**")
        .addField(`**Tipo:**`, `\`\`\`prolog\n${typeof(evaled)}\`\`\``, true)
        .addField("**Evaluado en**", `\`\`\`yaml\n${Date.now() - message.createdTimestamp}ms\`\`\``, true)
        .addField(`**Entrada**`, `\`\`\`js\n${command}\`\`\``)
        .addField(`**Salida**`, `\`\`\`js\n${inspect(evaled, {depth: 0 })}\`\`\``)
        message.lineReply(embed)
    } catch (error){
        const faraonwapo = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .addField(`**Entrada**`, `\`\`\`js\n${command}\`\`\``)
        .addField(`**Error**`, `\`\`\`js\n${error}\`\`\``)
        message.lineReply(faraonwapo)
    }
    }
}