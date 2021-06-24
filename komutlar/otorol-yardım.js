const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('🔔 Otorol Komutlarımız')
.setTimestamp()
.addField('⚡ Otorol Ayarlama.', '**▫️** **Kullanım *oto-rol-ayarla')
.addField('❄ Otorol Kapatma.', '**▫️** **Kullanım   *otorol-kapat')
.addField('🔮 Otorol Mesajı.', '**▫️** **Kullanım   *otorol-msg')
.addField('🎲 Gerekli Olabilecek Destek 1.', '**▫️** **BOT ADI Botumuzun Yetkisi Üstte Olmalıdır Aksi Takdirde Otorol Veremez.**')
.addField('🧿 Örnek 1.', '**▫️** **Kullanım <:esit:726790943650480130>   *otorol-msg -uye- Hoşgeldin! senle beraber -uyesayisi- Kişiyiz!**')
.addField('🗡 Örnek 2.', '**▫️** **Kullanım <:esit:726790943650480130>   *oto-rol-ayarla @rol #kanal**')
.addField('🔐 Değişkenler 1.', '**▫️** **-uye- Kişiyi Doğrudan Etiketler.**')
.addField('🧲 Değişkenler 2.', '**▫️** **-uyetag- Kişinin Adını Ve Etiketini Atar.**')
.addField('📂 Değişkenler 3.', '**▫️** **-rol- Otorolde Belirlenmiş Olan Rolü Atar.**')
.addField('🔸 Değişkenler 4.', '**▫️** **-server- Sunucu İsmini Atar.**')
.addField('♻ Değişkenler 5.', '**▫️** **-uyesayisi- Sunucuda Olan Üyeleri Sayar Ve Onu Mesaja Döker.**')
.setFooter('💎 Bessinger', client.user.avatarURL)
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
  name: 'otorol',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};