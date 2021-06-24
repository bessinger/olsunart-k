const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const çalışmasüresi = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const lewixcode = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Bessinger Bot  \'İstatistikler', bot.user.avatarURL)
  .addField("»  **Geliştirici** ","<@676886594581692427>")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true) 
  .addField("» **Çalışma süresi**", çalışmasüresi)
  .addField("» **Kullanıcılar**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/zg4uj5t9H2)", )
 return message.channel.send(lewixcode);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'istatistik', 'bot-istatistik'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "istatistikler",
  usage: "istatistik"
};