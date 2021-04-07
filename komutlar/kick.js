const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription('Malesef bu komutu sen kullanamazsın!')
      .setColor("RANDOM");

    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen atılacak kişiyi etiketleyiniz!")
        .setColor("RANDOM")
        .setFooter(bot.user.username, bot.user.avatarURL())
    );
  }

  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("{u} Adlı şahsın sunucudan atılmasını onaylıyor musunuz?:verified:")
    .setFooter(bot.user.username, bot.user.avatarURL());
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = [":white_check_mark:"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!:verified:"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === ":white_check_mark:") {
        message.channel.send("İşlem onaylandı ${u} adlı kişi sunucudan atıldı");

        message.guild.member(u).kick();
      }
    });
  });
};

module.exports.conf = {
  aliases: [],
  permLevel: 3,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "kick",
  description: "kick",
  usage: "kick"
};