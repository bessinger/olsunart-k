const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:red:729390621093003275> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (!db.fetch(`reklamK_${message.channel.id}`)) {
  return message.reply(`Kontrol Yaptım ! \n Sanırım Bu Özellik Zaten Kapalı <:red:729390621093003275>`)
}
  db.delete(`reklamK_${message.channel.id}`)
  message.reply(`Bu özellik **sadece bu kanalda** devre dışı bırakıldı. <:onay:729390621193666680>`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'reklam-kapat',
  description: 'sayaç', 
  usage: 'sayaç'
};