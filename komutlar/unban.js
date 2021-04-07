const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
  message.delete();
  let fynx_code = args[0]
if(!fynx_code) return message.reply('** Doğru kullanım : ``*unban <ID>`` **')
  message.guild.unban(fynx_code);
  message.react("✅")
};
exports.conf = {
  enabled:false,
  guildOnly: false,
  aliases: [],
  permlevel: 2
};
exports.help = {
  name: "unban",
  description: "Herhangi bir kullanıcının banını açarsınız.",
  usage: "unban kullanıcı id"
};
