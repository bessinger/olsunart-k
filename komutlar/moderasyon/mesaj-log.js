const Discord = require('discord.js');
const Database = require("plasma-db");
const db = new Database("./database.json");
exports.run = async(client, message, args) => {
    let enginar = message.mentions.channels.first()
if(!enginar) return message.channel.send('Lütfen Mesaj log kanalını belirt!')
    db.set(`mesajlog_${message.guild.id}`, enginar.id)
    return message.channel.send(`Mesaj log kanalı başarı ile <#${enginar.id}> olarak ayarlandı!`)

};


exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [],
permLevel: 2


};
exports.help = {
    name : "mesaj-log"
    
    };