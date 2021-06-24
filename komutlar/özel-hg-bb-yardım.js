const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('🔔 Özel HG BB Komutları.')
.setTimestamp()
.addField('📯 Kişiye Özelden Hoşgeldin Mesajı.', '**▫️** **Kullanım  *özel-hg')
.addField('💦 Kişiye Özelden Görüşürüz Mesajı.', '**▫️** **Kullanım    *özel-bb')
.addField('⚓ Değişkenler 1.', '**▫️** ** -sunucu-**')
.addField('🚀 Değişkenler 2.', '**▫️** **-kullanıcı-**')
.addField('🌈 Örnek 1', '**▫️** **s-özel-hg Merhaba -kullanıcı- -sunucu- Adlı Sunucuya Giriş Yaptın**')
.addField('🌬 Örnek 2', '**▫️** **s-özel-bb Merhaba -kullanıcı- -sunucu- Adlı Sunucudan Çıkış Yaptın**')
.setFooter('💎 Jokerapp', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 3 
};

exports.help = {
  name: 'özel-hg-bb',
  description: 'Tüm komutları gösterir.',
  usage: 'yardıms'
};