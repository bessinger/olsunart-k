const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('<:art:742358307481714759> Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
  if (!args[0]) return message.channel.send('<:art:742358307481714759> Sa-as yazısını açmak için; `s-sa-as aç veya kapat`')
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')
      message.channel.send(`<:art:742358307481714759> Başarıyla botun \`Aleyküm selam\` yazmasını açtınız., Artık bot \`sa\` yazıldığında cevap verecek.`)
    
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
      message.channel.send(`<:art:742358307481714759> Başarıyla \`Aleyküm selam\` yazmasını kapattınız, Artık bot \`sa\` yazıldığında cevap vermeyecek.`)
    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sa-as'
};