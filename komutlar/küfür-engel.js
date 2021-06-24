const Discord = require('discord.js'); //<a:hayir:718509547454595082> <a:evet:718509538474459167>
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<:red:729390621093003275> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  if (db.fetch(`küfürE_${message.channel.id}`)) {
  return message.reply(`Kontrol Yaptım ! \n Sanırım Bu Özellik Zaten Aktif <:red:729390621093003275>`)
}
  db.set(`küfürE_${message.channel.id}`, "aktif")
  message.reply(`Bu özellik **başarıyla açıldı.** ${client.emojis.get("729390621193666680")}`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 2
};
//<:red:729390621093003275> <:onay:729390621193666680>
exports.help = {
  name: 'küfür-aç',
  description: 'sayaç', 
  usage: 'sayaç'
}