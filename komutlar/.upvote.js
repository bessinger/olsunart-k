const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3ODY1NjUwNTU0ODYzNjIxMCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjEwNjI1MjcwfQ.d9fB5cX-Q1_ei4dOVwKWpTqpIdUP51WGnwfjXVKBeoU', client);
exports.run = (client, message) => {
    dbl.hasVoted(message.author.id).then(voted => {
        if (!voted) {
            message.reply("Bu komutu kullanabilmek için DBL üzerinden oy vermen gerekiyor. (Eğer oy verdiyseniz bi kaç dakika bekleyin .s) \nOy vermek için: https://top.gg/bot/778656505548636210")

        } else {
            message.channel.send("UpVoter rolün verildi.");
            message.member.addRole("799257539300687913")

        }
    })
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['upvote'],
    permLevel: 0
};

exports.help = {
    name: 'upvote',
    description: '',
    usage: 'upvote'
};