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
    // fetches activities of all members of all guilds
    
    setTimeout(async () => console.log(await x(client)))
    /*
    const guilds = fetchGuilds(client);
    const members = guilds.map(async guild => await fetchMembers(guild));
    const activities = members.map(async member => await fetchPresence(member));
    setTimeout(() => console.log(activities), 1000);*/
    //.each(async guild => members.push(await fetchMembers(guild)));
    // setTimeout(() => console.log(members), 2000);
    //members.map(async member => console.log(await fetchPresence(member)));
});
// 476164427968675850
client.on('messageCreate', (message) => {
    if (message.content.startsWith('ping')) {
        message.channel.send('pong!');
    }
});


async function x(client) {
    let guilds, members, activities;
    guilds = fetchGuilds(client);
    members = await Promise.all(guilds.map(guild => fetchMembers(guild)));
    activities = members[1].map(member => member.displayName);
        //.map(async guild => (await fetchMembers(guild)));
        //.map(async member => { return await fetchPresence(member)}));
    return activities;
}

// fetches a collection of guilds that bot is apart of
function fetchGuilds(client) {
    return client.guilds.cache;
}

// fetches a collection of members of guild
// returns a promise so we don't have to async/await
function fetchMembers(guild) {
    return guild.members.fetch();
}

// fetches presence of member
function fetchPresence(member) {
    if (member.presence && (member.presence.activities !== undefined)) return member.presence.activities;
}

client.login('');
