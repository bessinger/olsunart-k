const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const alp = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle("Bot'a oy vererek bize destek verebilirsin <3")
  .setDescription(`[Vote](https://top.gg/bot/778656505548636210)`)
  message.channel.send(alp)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vote', 'oy', 'oyver'],
  permLevel: 0
}
exports.help = {
  name: "vote",
  usage: "bot-vote",
  description: "bot a oy verirsiniz."
}