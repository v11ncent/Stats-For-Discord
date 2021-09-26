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
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS"] });

client.on('ready', () => {
    console.log('I am ready!');    
    setTimeout(async () => console.log(await fetchActivity(client)))
});

client.on('messageCreate', (message) => {
    if (message.content.startsWith('ping')) {
        message.channel.send('pong!');
    }
});

async function fetchActivity(client) {
    let guilds, members, activities = [];
    guilds = fetchGuilds(client);
    members = await Promise.all(guilds.map(guild => fetchMembers(guild)));
    for (let i = 0; i < members.length; i++) {
        await Promise.all(members[i].map(member => activities.push(fetchPresence(member))));
    }
    return filterActivity(activities);
}

function filterActivity(activities) {
    return activities.filter(element => { if ((typeof element !== 'undefined') && (element.length > 0)) return true });
}

function fetchGuilds(client) {
    return client.guilds.cache;
}

function fetchMembers(guild) {
    return guild.members.fetch();
}

function fetchPresence(member) {
    if (member.presence) return member.presence.activities;
}

client.login('');
