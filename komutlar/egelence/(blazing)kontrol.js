const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const bessinger = new Discord.MessageEmbed()
  .setAuthor(`Nether bessinger`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`• Subscription: ${db.has(`üyelikk_${message.author.id}`, "üyelik") ? `**bessinger!**` : `**Normal!**`}`)
.setFooter("Bessiger", message.author.avatarURL())
.setTimestamp()
  message.channel.send(bessinger)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["bessinger", "check-bessinger", "bessinger-kontrol", "bessinger-check"],
    permLevel: 0
}

exports.help = {
    name: "bessinger",
    description: "bşad",
    usage: "yrdm felan"
}