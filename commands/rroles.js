const Discord = require('discord.js');
module.exports = {
    name: 'rbmc',
    description: "Reaction Base Music Controls!",
    async execute(message, args2, discordClient, _CMD_JOIN, _CMD_HELP, _CMD_PAUSE, _CMD_PLAY, _CMD_SKIP, args) {
        const channel = '810583219598524457';
        //const yellow = message.guild.roles.cache.find(role => role.name === "yellow");
        //const blue = message.guild.roles.cache.find(role => role.name === "blue");
 
        const playEmoji = '▶️';
        const pauseEmoji = '⏸️';
        const nextEmoji = '⏭️';
        const clearplaylistEmoji = '🆑';
        const shuffleEmoji = '🔀';
        const listEmoji = '🧾';
        const byeEmoji = '👋';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Melody Media Controls')
            .setDescription('Canont Use Mic? Simple One Click Controls  \n\n'
                + `${playEmoji} = Play          `          
                + `${pauseEmoji} = pause\n`
                + `${nextEmoji} = next song\n`
                + `${shuffleEmoji} = Turn Shuffle ON/OF\n`
                + `${listEmoji} = Current Playlist\n`
                + `${clearplaylistEmoji} = Clear Playlist\n`
                + `${byeEmoji} = Disconnect Melody\n`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(playEmoji);
        messageEmbed.react(pauseEmoji);
        messageEmbed.react(nextEmoji);
        messageEmbed.react(shuffleEmoji);
        messageEmbed.react(listEmoji);
        messageEmbed.react(clearplaylistEmoji);
        messageEmbed.react(byeEmoji);
 
        discordClient.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === playEmoji) {
                    await reaction.message
                    message.channel.send(` -resume `)
                    .then(msg => {
                        msg.delete({
                            timeout: 1000 * 6
                        })
                    })
                }
                if (reaction.emoji.name === pauseEmoji) {
                    await reaction.message
                    message.channel.send(` ${_CMD_PAUSE} `)
                    .then(msg => {
                        msg.delete({
                            timeout: 1000 * 6
                        })
                    })
                }
                if (reaction.emoji.name === nextEmoji) {
                    await reaction.message
                    message.channel.send(` -skip `)
                    .then(msg => {
                        msg.delete({
                            timeout: 1000 * 6
                        })
                    })
                }
                if (reaction.emoji.name === shuffleEmoji) {
                    await reaction.message
                    message.channel.send(` -shuffle `)
                    .then(msg => {
                        msg.delete({
                            timeout: 1000 * 6
                        })
                    })
                }
                if (reaction.emoji.name === listEmoji) {
                    await reaction.message
                    message.channel.send(` -playlist `)
                    .then(msg => {
                        msg.delete({
                            timeout: 1000 * 6
                        })
                    })
                }
                if (reaction.emoji.name === clearplaylistEmoji) {
                    await reaction.message
                    message.channel.send(` -clear `)
                    .then(msg => {
                        msg.delete({
                            timeout: 1000 * 6
                        })
                    })
                }
                if (reaction.emoji.name === byeEmoji) {
                    await reaction.message
                    message.channel.send(` -leave `)
                    .then(msg => {
                        msg.delete({
                            timeout: 1000 * 6
                        })
                    })
                }
            } else {
                return;
            }
 
        });
 
        discordClient.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === playEmoji) {
                    await reaction.message
                    message.channel.send(` -resume `)
                    .then(msg => {
                        msg.delete({
                            timeout: 1000 * 6
                        })
                    })
                }
                if (reaction.emoji.name === pauseEmoji) {
                    await reaction.message
                    message.channel.send(` ${_CMD_PAUSE} `)
                    .then(msg => {
                        msg.delete({
                            timeout: 1000 * 6
                        })
                    })
                }
                if (reaction.emoji.name === nextEmoji) {
                    await reaction.message
                    message.channel.send(` -skip `)
                    .then(msg => {
                        msg.delete({
                            timeout: 1000 * 6
                        })
                    })
                }
                if (reaction.emoji.name === shuffleEmoji) {
                    await reaction.message
                    message.channel.send(` -shuffle `)
                    .then(msg => {
                        msg.delete({
                            timeout: 1000 * 6
                        })
                    })
                }
                if (reaction.emoji.name === listEmoji) {
                    await reaction.message
                    message.channel.send(` -playlist `)
                    .then(msg => {
                        msg.delete({
                            timeout: 1000 * 6
                        })
                    })
                }
                if (reaction.emoji.name === clearplaylistEmoji) {
                    await reaction.message
                    message.channel.send(` -clear `)
                    .then(msg => {
                        msg.delete({
                            timeout: 1000 * 6
                        })
                    })
                }
                if (reaction.emoji.name === byeEmoji) {
                    await reaction.message
                    message.channel.send(` -leave `)
                    .then(msg => {
                        msg.delete({
                            timeout: 1000 * 6
                        })
                    })
                }
            } else {
                return;
            }
        });
    }
 
}   
