const Discord = require('discord.js');
const client = new Discord.Client({
	disablementions: "all",
	shards: "auto",
	restTimeOffset: 0	
});
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
  name: "help",
  alias: ["ayuda"],

async execute (client, message, args){
	const user = message.author;

	const userReactions = message.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));

	const embedprincipal = new Discord.MessageEmbed()

	.setTitle("Bienvenido al apartado de ayuda!")
	.setDescription("Reacciona en 💰 Para ir al apartado de economia\n\nReacciona en 💎 Para ir al apartado general\n\nReacciona en 🥊 para ir al apartado Utilidad\n\nReacciona en ⚔️ Para ir al apartado de moderacion\n\nReacciona en 💽 para ir a el apartado de diversion\n\nReacciona en 💎 Para ir al apartado general\n\nReacciona en ⭐ Para Volver a la pagina principal")
	.setFooter(`Comando ejecutado por ${user.tag} `)///user.tag es para la tag del user
	.setColor("RANDOM")

	const embedeconomia = new Discord.MessageEmbed()

	.setTitle("Apartado de Economia")
	.setDescription("**c/work**\nCon este comando trabajaras en alguna profesion y ganaras dinero!\n\n**c/crime**\n\Con este comando cometeras un crimen! podras ganar mas dinero o perder dinero, usalo con cuidado\n\n**c/bal**\n\Con este comando puedes ver cuanto dinero tienes!\n\n**c/shop**\nMira cosas que puedes comprar con tu dinero en la tienda!\n\n**c/buy**\nCompra el objeto que desees de la tienda!\n\n**c/dep**\nDeposita el dinero que desees en el banco!\n\n**c/with**\nSaca del banco el dinero que quieras!\n\n**c/mejoras**\nMira cuantas mejoras tienes en el comando work o de alguien mas (Mejoras de dinero las cuales se compran con el comando c/buy dinero)\n\n**c/inventario**\nInvestiga que medallas tienes y las de otras personas!\n\n**c/rob**\nRoba dinero a otra persona mencionandola, hay una posibilidad que al robarlo pierdas dinero")
	.setColor("RANDOM")

	const embedgeneral = new Discord.MessageEmbed()

	.setTitle("Apartado General")
	.setDescription("**c/help**\nEl comando para acceder a un menu con los comando.\n\n**c/ping**\n Observa el ping actual del bot\n\n**c/say**\nHaz que el bot diga algo!\n\n**c/send**\nEnvia un mensaje a algun canal en especifico.\n\n**c/support**\nTe mando la invitacion de mi servidor de soporte!\n\n**c/embed**\ncrea un embed con cactusio, para hacerlo debe ser asi [**titulo**] >> [**descripcion**] >> [**pie de pagina**] >> [**color**]")
	.setColor("RANDOM")


	const embedutilidad = new Discord.MessageEmbed()

	.setTitle("Apartado de Utilidad")
	.setDescription("**c/cs**\nEste comando es para establecer un canal de sugerencias en tu server\n\n**c/sugerencia**\nEnvia una sugerencia! Si el server no tiene un canal establecido, esto no se podra.\n\n**c/clear**\nBorra una cantidad de mensajes en especifico.\n\n**c/avatar**\nMenciona a alguien para poder ver su avatar! si no mencionas a nadie te enviara tu avatar.\n\n**c/userinfo**\nTe da informacion del usuario mencionado.\n\n**c/traducir**\nTraduce un mensaje aun idioma ejemplo en(ingles)\n\n**c/reportbug**\n\Reporta un bug de cactusio a mi creador\n\n**c/slowmode**\n\n Coloca slowMode para un canal por ejemplo 2s\n\n**c/avatar**\nObtiene la foto de perfil de alguien mencionandolo o la tuya\n\n**c/emoji**\nObtiene el emoji de un servidor colocandolo.\n\n**c/qr**\nCrea un codigo qr de un link o texto")
	.setColor("RANDOM")

	const embedmoderacion = new Discord.MessageEmbed()
	.setTitle("Apartado de moderacion")
	.setDescription("**c/mute**\nMutea a un usuario indefinidamente que se desmutere hasta que utilizes el comando c/unmute\n\n**c/unmute**\nDesmutea a un usuario muteado.\n\n**c/tempmute**\nMutea temporalmente a un usuario, para hacerlo debes ponerlo asi (1s = 1 segundo, 1m = 1 minuto, 1h = 1 hora, pueden poner el tiempo que quieran por ejemplo 2 horas o lo que quieran)\n\n**c/warn**\nWarnea a un usuario\n\n**c/warns**\nVe los warns que tiene un usuario\n\n**c/unwarn**\nQuitale un warn a un usuario\n\n**c/lock**\nBloquea un canal para que no se puedan enviar mensajes\n\n**c/unlock**\nDesbloquea un canal bloqueado con el comado c/lock.")

	const embedmusica = new Discord.MessageEmbed()
	.setTitle("Apartado de musica")
	.setDescription("**c/play**\nPon a reproducir alguna cancion que quiras con su link o con el nombre y tu lo eljies!(Debes estar en un canal de voz Y si cactusio esta en un canal de voz debes conectarte a ese canal)\n\n**c/stop**\n\nDeten la reproduccion de playlist o canciones.\n\n**c/queue**\n\nTe muestro la cola actual de reproduccion de canciones en la cola.\n\n**c/pause**\nPausa la cancion que actualmente se esta reproduciendo\n\n**c/skip**\n\nSalta la cancion que se esta reproduciendo para ir a la siguiente.\n\n**c/continue**\nHas que se vuelva a reproducir la cancion que pausaste\n\n**c/volume**\nEstablece el volumen a lo que quieras!\n\n**c/loop**\nHas que se repita siempre que se acabe la cancion que tu quieras o que se este reproduciendo!")

	const embeddiversion = new Discord.MessageEmbed()
	.setTitle("Apartado de diversion")
	.setDescription("**c/impostor**\nMenciona a alguien para ver si es el impostor(Si no mencionas a nadie veras si tu eres el impostor!)\n\n**c/random**\nTe digo alguna cosa random!\n\n**c/rip**\nF en el chat por el que mencionaste.\n\n**c/soyadmin**\nImaginate como un admin o si eres admin pues queda perfecto!\n\n**c/triggered**\nHas que la persona haga como si fuera triggered osea estuviera enojado\n\n**c/wanted**\nHas como si un usuario esta siendo buscado!\n\n**c/wasted**\n\nHas como si una persona halla sido wasted")



	message.channel.send(embedprincipal).then(msg =>{
		msg.react('💰')
		msg.react('💎')
		msg.react('🥊')
		msg.react('⚔️')
		//msg.react('🎵')
		msg.react('💽')
		msg.react('⭐')

		msg.awaitReactions((reaction, user) => {
			if(message.author.id !== user.id) return;
			if(reaction.emoji.name === '⭐'){
				reaction.users.remove(user.id);
				msg.edit(embedprincipal)
			}

			if(reaction.emoji.name === '💰'){
				reaction.users.remove(user.id);
				msg.edit(embedeconomia)
			}

			if(reaction.emoji.name === '💎'){
				reaction.users.remove(user.id);
				msg.edit(embedgeneral)
			}

			if(reaction.emoji.name === '🥊'){
				reaction.users.remove(user.id);
				msg.edit(embedutilidad)
			}
			if(reaction.emoji.name === '⚔️'){
				reaction.users.remove(user.id);
				msg.edit(embedmoderacion)
			}
			if(reaction.emoji.name === '🎵'){
				reaction.users.remove(user.id);
				msg.edit(embedmusica)
			}
			if(reaction.emoji.name === '💽'){
				reaction.users.remove(user.id);
				msg.edit(embeddiversion)
			}

		
		})
	})

  

 }

}






//video por si algo xd: https://www.youtube.com/watch?v=rIWBa9zIMwg&list=PLCGE7KnIiMtJ3TR-FSIbmWSDXs7o66Bmr&index=13.