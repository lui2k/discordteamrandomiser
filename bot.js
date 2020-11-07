const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if(message.content.startsWith("!random "))
    {
      var input = message.content.replace("!random ","");
      var arr = input.split(",");
      var NumPerTeam = arr.length / 2;
      arr = arr.sort(() => Math.random() - 0.5);

      var team1 = arr.slice(0,NumPerTeam);
      var team2 = arr.slice(NumPerTeam);
      console.log(team1);
      console.log(team2);
      message.reply("Team 1: "+ team1);
      message.reply("Team 2: "+ team1);
    }
}
client.login(process.env.BOT_TOKEN);
