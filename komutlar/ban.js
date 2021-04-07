const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("bu komutu kullanmak için yetkin yeterli değil!")
      .setColor("RED");

    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen sunucudan yasaklanacak kişiyi etiketleyiniz!")
        .setColor("BLACK")
        .setFooter(bot.user.username, bot.user.avatarURL())
    );
  }

  const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setDescription(`${u} Adlı şahsın yasaklanmasını onaylıyor musunuz?:banned: `)
    .setFooter(`bot.user.username, bot.user.avatarURL()`);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = [":white_check_mark:"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("İşlem iptal oldu!:banned:"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === ":white_check_mark:") {
        message.channel.send(`
          İşlem onaylandı! ${u} adlı şahıs sunucudan yasaklandı:banned:
        `);

        message.guild.member(u, 2).ban();
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
  name: "ban",
  description: "ban",
  usage: "ban"
};