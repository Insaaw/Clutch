const Discord = require('discord.js')
const bot = new Discord.Client()
const Google = require('./commands/google')
const token = process.env.token



bot.on('guildMemberAdd', function (member) {

  member.createDM().then(function (channel) {
    return channel.send('Bienvenu sur le serveur' +  member.displayName)
  }).catch(console.error)

})

bot.on('ready', function() {
  bot.user.setAvatar('./avatar.JPG').catch(console.error)
  bot.user.setGame('Modération').catch(console.error)

})

 var prefix  = "!"

bot.on('message', function (message) {
  if (Google.match(message)) {
    return Google.action(message)
  }

  if (message.content === '!ping') {
    message.author.createDM().then(channel => { 
      channel.send('pong')
    })
    
    return message.delete(0)

  }

  if (message.content.startsWith(prefix + "!clear")){

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) 
    return message.channel.send("Tu n'a pas le droit d'utiliser cette commande !")
    let args = message.content.split(" ").slice(1)

    if(!args[0]) return message.channel.send("Précise un nombre")
    message.channel.bulkDelete(args[0]).then(() => {

      message.author.createDM().then(channel => { 
      channel.send(`${args[0]} messages ont été supprimés`)
    })
      return message.delete(0)
    })

   

  }



  if (message.content === '!commandes'){
    message.author.createDM().then(channel => { 
      channel.send(help_embed)
    })

    var help_embed = new Discord.RichEmbed()
    .setColor("#40A497")
    .setTitle("Les commandes du bot")
    .setThumbnail(message.author.avatarURL)
    .addField("!google [Ma recherche]", "Cela recherche sur google.")
    .addField("!setup", "Tout le materiel de mon setup")
    .addField("!blague", "Vous voulez une blaguer aléatoirement ?")
    .addField("!network", "Tous mes réseaux sociaux !")
    
    return message.delete(0)
  }

  if (message.content === '!setup'){

    message.author.createDM().then(channel => { 
      channel.send(help_embed)
    })

    var help_embed = new Discord.RichEmbed()
    .setColor("#b90000")
    .setTitle("⚡ Voici mon setup ⚡")
    .setThumbnail(message.author.avatarURL)
    .addField("Ecran", "LG 21/9 Ultrawide")
    .addField("Clavier", "K70 MX brown - Corsair")
    .addField("Souris", "Logitech MX Master 2S")
    .addField("Casque", "Arctis 3 - Steelseries")
    .addField("Tapis de souris", "Logitech")
    .addField("Caméra ", "Canon 700D")
    .addField("Bureau", "Bekant 180*70 Black - Ikea")
    
    return message.delete(0)
  }

  if (message.content === '!network'){

    message.author.createDM().then(channel => { 
      channel.send(help_embed)
    })


    var help_embed = new Discord.RichEmbed()
    .setColor("#b90000")
    .setTitle("Mes réseaux sociaux")
    .setThumbnail(message.author.avatarURL)
    .addField("-> Twitter", "@ClutchCodeur")
    .addField("-> Twitch", "@MiiClutch")
    .addField("-> Instagram", "@MiiClutch")
    .addField("-> Youtube", "Clutch")
    return message.delete(0)
  }


})

bot.login(token)
