const DBL = require('dblapi.js')
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3ODY1NjUwNTU0ODYzNjIxMCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjEwNjI1MjcwfQ.d9fB5cX-Q1_ei4dOVwKWpTqpIdUP51WGnwfjXVKBeoU', client) 


dbl.hasVoted(message.author.id).then(voted => {
      if(voted) {
// buranın altına komut

// buranın üstüne komut
     } else {
        message.channel.send("hey dostum bu komutu kullanmak için bota oy vermelisin")
}});
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
  
  exports.help = {
    name: 'deneme',
   } 