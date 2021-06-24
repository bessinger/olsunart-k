const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('🔔 Yetkili Komutları')
.setTimestamp()
.addField('🦋 Sistem Komutları.', '**▫️** **Kullanım <:esit:742755622948175993> *sistemler')
.setFooter('💎 System 64', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yetkili2',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili'
};