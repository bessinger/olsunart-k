const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const alp = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle("Bot Davet Sistemi")
  .setDescription(`[Botu Davet Et](https://discord.com/oauth2/authorize?client_id=778656505548636210&scope=bot&permissions=8)\n [Destek sunucusu](https://discord.gg/zg4uj5t9H2)`)
  message.channel.send(alp)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet', 'botdavet', 'davetet'],
  permLevel: 0
}
exports.help = {
  name: "davet",
  usage: "bot-davet",
  description: "botu davet eder."
}