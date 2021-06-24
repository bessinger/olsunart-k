const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('🔔 Sayaç Komutlarımız')
.setTimestamp()
.addField('🎡 Sayaç Ayarlama.', '**▫️** **Kullanım  s-sayaç-ayarla**')
.addField('🚨 Sayaç Kapatma.', '**▫️** **Kullanım   sayaç sıfırlamak için sayaçcı başka kanala ayarlayon ve o kanalı sislim**')
.addField('🌙 Sayaç HG Mesajı.', '**▫️** **Kullanım   s-sayaç-hg-msg**')
.addField('🌀 Sayaç BB Mesajı.', '**▫️** **Kullanım   s-sayaç-bb-msg**')

.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 2 
};

exports.help = {
  name: 'sayaç',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};