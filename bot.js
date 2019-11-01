const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("607688781545472002")
setInterval(function() {
channel.send(`am gay am gay am gay am gay am gay am gay am gay am gay`);
}, 30)
})

client.login(process.env.BOT_TOKEN);