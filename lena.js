const Discord = require('discord.js')
const bot = new Discord.Client()

 var prefix  = "!"
 bot.on('ready', function() {
    bot.user.setAvatar('./avatar2.jpeg').catch(console.error)
    bot.user.setGame('se tripoter').catch(console.error)
  
  })


bot.on('message', function (message) {

  if (message.content === '!sexcommandes'){
    message.author.createDM().then(channel => { 
      channel.send(help_embed)
    })

    var help_embed = new Discord.RichEmbed()
    .setColor("#CE2082")
    .setTitle("Vos désirs sont des ordres !")
    .setThumbnail(message.author.avatarURL)
    .addField("`!anal`", "Quelques images anal")
    .addField("`!boobs`", "Tout plein de BOOBS !")
    .addField("`!Bdsm`", "Pour les accros à la domination")
    .addField("`!randomsex`", "une image au hazard")
    .addField("`!videoanal`", "Vidéo anal envoyé en privée !")

    
    return message.delete(0)
  }

 //BOT DE NSFW 

  if (message.content === '!anal'){

    var cul = [

      "https://cdn.pornpics.com/pics/2017-11-26/287032_05big.jpg",
      "https://cdn.pornpics.com/pics/2017-10-27/283773_08big.jpg",
      "https://cdn.pornpics.com/pics1/2018-07-11/538768_08big.jpg",

    ]

    var ass = cul[Math.floor(Math.random() * cul.length )]

    var ass_embed = new Discord.RichEmbed()
    .setColor("#9b59b6")
    .setTitle("😘🍆🍑")
    .setImage(ass)

    bot.channels.get("459371651025338381").send(ass_embed)
    return message.delete(0)
  }

  if (message.content === '!boobs'){

    var cul = [

      "https://cdn.pornpics.com/pics/2017-11-26/287032_05big.jpg",
      "https://cdn.pornpics.com/pics/2017-10-27/283773_08big.jpg",
      "https://cdn.pornpics.com/pics1/2018-07-11/538768_08big.jpg",

    ]

    var ass = cul[Math.floor(Math.random() * cul.length )]

    var ass_embed = new Discord.RichEmbed()
    .setColor("#9b59b6")
    .setTitle("😘🍆🍑")
    .setImage(ass)

    bot.channels.get("459371651025338381").send(ass_embed)
    return message.delete(0)
  }

  if (message.content === '!Bdsm'){

    var cul = [

      "https://cdn.pornpics.com/pics/2017-11-26/287032_05big.jpg",
      "https://cdn.pornpics.com/pics/2017-10-27/283773_08big.jpg",
      "https://cdn.pornpics.com/pics1/2018-07-11/538768_08big.jpg",

    ]

    var ass = cul[Math.floor(Math.random() * cul.length )]

    var ass_embed = new Discord.RichEmbed()
    .setColor("#9b59b6")
    .setTitle("😘🍆🍑")
    .setImage(ass)

    bot.channels.get("459371651025338381").send(ass_embed)
    return message.delete(0)
  }

  if (message.content === '!randomsex'){

    var cul = [

      "https://cdn.pornpics.com/pics/2017-11-26/287032_05big.jpg",
      "https://cdn.pornpics.com/pics/2017-10-27/283773_08big.jpg",
      "https://cdn.pornpics.com/pics1/2018-07-11/538768_08big.jpg",

    ]

    var ass = cul[Math.floor(Math.random() * cul.length )]

    var ass_embed = new Discord.RichEmbed()
    .setColor("#9b59b6")
    .setTitle("😘🍆🍑")
    .setImage(ass)

    bot.channels.get("459371651025338381").send(ass_embed)
    return message.delete(0)
  }

  if (message.content === '!videoanal'){

    var cul = [

      "https://cdn.pornpics.com/pics/2017-11-26/287032_05big.jpg",
      "https://cdn.pornpics.com/pics/2017-10-27/283773_08big.jpg",
      "https://cdn.pornpics.com/pics1/2018-07-11/538768_08big.jpg",

    ]



    var ass = cul[Math.floor(Math.random() * cul.length )]

    var ass_embed = new Discord.RichEmbed()
    .setColor("#9b59b6")
    .setTitle("😘🍆🍑")
    .setImage(ass)

    message.author.createDM().then(channel => { 
      channel.send(ass_embed)
    })
    
    return message.delete(0)
  }

  // FIN DU BOT NSFW

})

bot.login('NDk5ODg3MjAyOTE1MDU3NjY1.DqC1RQ.C5nu-smD-lsqguWaaAlCZHm0_40')
