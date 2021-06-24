const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('JAİL SİSTEMİ')
.setTimestamp()
.addField(' Jail Kanal.', '**▫️** **Kullanım  s-jail-kanal ayarla #kanal**')
.addField(' Jail Rol.', '**▫️** **Kullanım  s-jail-rol ayarla @rol**')
.addField(' Jail Yetkilisi.', '**▫️** **Kullanım  s-jail-yetkilisi ayarla @rol**')
.addField(' Jail.', '**▫️** **Kullanım  s-jail**')
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
  name: 'jail-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'jail-yardım'
};