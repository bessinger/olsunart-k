const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('🔔 Yetkili Komutları')
.setTimestamp()
.addField('⚖️ Özel HG BB Komutları.', '**▫️** **Kullanım <:esit:742755622948175993> *özel-hg-bb')
.addField('✨ Emoji Rol Komutları.', '**▫️** **Kullanım <:esit:742755622948175993>   *emoji-rol')
.addField('🌍 Otorol Komutları.', '**▫️** **Kullanım <:esit:742755622948175993>   *otorol')
.addField('💡 Sayaç Komutları.', '**▫️** **Kullanım <:esit:742755622948175993>   *sayaç')
.addField('🧹 Destek Sistemimiz.', '**▫️** **Kullanım <:esit:742755622948175993>   *ticket')
.addField('💿 Sa-As Sistemimiz.', '**▫️** **Kullanım <:esit:742755622948175993>   *sa-as')
.addField('💹 Giriş Çıkış Sistemimiz.', '**▫️** **Kullanım <:esit:742755622948175993>   *giriş-çıkış')
.addField('👣 ModLog Sistemimiz.', '**▫️** **Kullanım <:esit:742755622948175993>   *mod-log')
.addField('✨  Jail Sistemimiz.', '**▫️** **Kullanım <:esit:742755622948175993>   *jail-yardım')
.addField('⚡ Seviye Sistemimiz.', '**▫️** **Kullanım <:esit:742755622948175993>   *level')
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
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili'
};