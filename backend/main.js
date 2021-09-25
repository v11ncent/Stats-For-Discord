/*
=================================================
Last change(s): 9/19/2021

Objectives:

1. Fetch all songs from users in a Discord server

2. Create noSQL database and tie songs to users

3. Congregate all tracks & artists by month/6 months/all time

4. Display on website

=================================================
*/

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS"] })

client.on('ready', () => {
  console.log('I am ready!');
  const idArray = [];
  client.guilds.cache.each(guild => guild.members.fetch().then(console.log));
  // console.log(guilds);
});
// 476164427968675850
client.on('messageCreate', (message) => {
    if (message.content.startsWith('ping')) {
        message.channel.send('pong!');
    }
});

client.login('');