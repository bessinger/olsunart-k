const Discord = require('discord.js');
const db = require("quick.db")
exports.run = async (client, message, args) => {
let kanal = await db.fetch(`seviyekanal${message.guild.id}`)
let xp = await db.fetch(`seviyexp${message.guild.id}`)
let sınır = await db.fetch(`seviyesınır${message.guild.id}`)

let kanal1 = [];
  if(kanal) kanal1 = `<:onay:729390621193666680> **Açık!**`
  if(!kanal) kanal1 = `<:red:729390621093003275> **Kapalı!**`

  let xp1 = [];
  if(xp) xp1 = `<:onay:729390621193666680> \`${xp}\``
  if(!xp) xp1 = `<:red:729390621093003275> **Ayarlanmamış! Default: \`250\`**`

let sınır1 = [];
  if(sınır) sınır1 = `<:onay:729390621193666680> \`${sınır}\``
  if(!sınır) sınır1 = `<:red:729390621093003275> **Ayarlanmamış! Default: \`5\`**`

message.channel.send(new Discord.RichEmbed()
.setColor("ff0000")
.setTitle(`${message.guild.name} Sunucusuna Ait Seviye-Sistemi Ayarları!`)   
.addField(`**Seviye-Log**`, `${kanal1}`,true)
.addField(`**Mesaj Başı Verilecek Xp**`, `${xp1}`,true)       
.addField(`**Kaç Puan Seviye Atlama**`, `${sınır1}`,true))

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'seviye-ayarlar'
};