const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('🔔 Botumuz istekleriniz ile gelişiyor.')
.setTimestamp()
.addField('⚙ Yetkili Komutları.', '**▫️** **Kullanım  *yetkili')
.addField('🛠️ Yetkili2 Komutları.', '**▫️** **Kullanım  *yetkili2')
.addField('🔱 Botumuzun Komutları.', '**▫️** **Kullanım  *bot')
.addField('🍞 Kullanıcı Komutları.', '**▫️** **Kullanım  *kullanıcı')
.setFooter('💎 Bessinger', client.user.avatarURL)
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
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};