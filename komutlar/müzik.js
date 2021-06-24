const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('GRAY')
.setTitle('🔔 Müzik Komutları.')
.setTimestamp()
.addField('🎶 Botun sesli kanala girmesi için.', '**▫️** **Kullanım  *gir')
.addField('🎶 İstediğiniz müziği seçmek için.', '**▫️** **Kullanım  *p isim')
.addField('🎶 Müziği kapatmak için.', '**▫️** **Kullanım  *dc')
.addField('🎶 Müziğin sesini ayarlamak için.', '**▫️** **Kullanım  *ses 1/100')
.addField('🎶 Müziği durdurmak için.', '**▫️** **Kullanım  *durdur')
.addField('🎶 Müziği devam ettirmek için.', '**▫️** **Kullanım  *devam')
.addField('🎶 Bir sonraki şarkıya geçmek için.', '**▫️** **Kullanım  *geç')
.addField('🎶 Kuyruktaki şarkıları görmek için.', '**▫️** **Kullanım  *sıra')
.setFooter('💎 Bessinger', client.user.avatarURL)
.setTimestamp()
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'müzik-yardım',
  description: 'Müzik komutlarını gösterir.',
  usage: 'müzik'
};