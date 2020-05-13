const Discord = require("discord.js")
const client = new Discord.Client()

client.on('ready', () => {
    client.user.setActivity("with Supreme Cop")

    //client.channels.cache.find(channel => channel.name === 'bot').send("Welcome!"); // for discord v12

    client.on("guildMemberAdd", member => {
        let guild = member.guild;
        guild.defaultChannel.sendMessage(`Welcome ${member.user} to our Discord Server. Ready to cook!?`).catch(console.error);
      });
});





client.login('NzA5Mzc4Njc4NTI5NzIwMzkz.XrlCmw.j4ybKozayj_T7RBAt5XiisoU3Bg')