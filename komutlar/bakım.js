exports.run = async(client, message, args, Discord = require("discord.js"), db = require("quick.db")) => {
  const app = await client.fetchApplication().then(a => a.owner);
  if (message.author.id != app.id) return;
  if (db.get(`${client.user.id}.bakım`)) {
    await db.delete(`${client.user.id}.bakım`);
    message.react("✅");
  } else {
    await db.set(`${client.user.id}.bakım`, true);
    message.react("📛");
  };
};
exports.conf = { aliases: [], permLevel: 0 }
exports.help = { name: "bakım" };