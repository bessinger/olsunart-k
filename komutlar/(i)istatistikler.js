const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const db = require("quick.db")
require("moment-duration-format");

exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const msg = message

  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "tr") {


    const bunemq = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const annencilermaldır = new Discord.MessageEmbed()

  .setColor('BLUE')
  .setFooter('Nether  \'Nether istatistikleri', bot.user.displayAvatarURL())
  .setThumbnail(bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
  .addField("» **Botun Sahibi**", "<@676886594581692427>")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", bunemq)
  .addField('» **Kullanıcılar**:', bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0))
  .addField("» **Sunucular**", bot.guilds.cache.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.cache.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ws.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``)
  .addField("**» Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=778656505548636210&scope=bot&permissions=8)")
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/zg4uj5t9H2)")

 return message.channel.send(annencilermaldır);
  
 


  }else{
    const bunemq1 = moment.duration(bot.uptime).format(" D [days], H [hours], m [minutes], s [seconds]");
    const aa2 = new Discord.MessageEmbed()
 
   .setColor('BLUE')
   .setFooter('Nether  \'Nether Stats', bot.user.displayAvatarURL())
   .setThumbnail(bot.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
   .addField("» **Bot Owners**", "<@676886594581692427> ")
   .addField("» **Ram Usage**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
   .addField("» **Uptime**", bunemq1)
   .addField('» **Total Users**:', bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0))
   .addField("» **Total Servers**", bot.guilds.cache.size.toLocaleString(), true)
   .addField("» **Total Channels**", bot.channels.cache.size.toLocaleString(), true)
   .addField("» **Discord.JS Version**", "v"+Discord.version, true)
   .addField("» **Node.JS Version**", `${process.version}`, true)
   .addField("» **Ping**", bot.ws.ping+" ms", true)
   .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
   .addField("» **Bit**", `\`${os.arch()}\``, true)
   .addField("» **Operating System**", `\`\`${os.platform()}\`\``)
   .addField("**» Bot Invite Url**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=778656505548636210&scope=bot&permissions=8)")
   .addField("**» Support server**", " [Sunucumuza Katıl](https://discord.gg/zg4uj5t9H2)")
 
  return message.channel.send(aa2);

  
  }


};

   
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'istatistik', 'stats', 'statistics'],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};