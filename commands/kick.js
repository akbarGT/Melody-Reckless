module.exports = {
    name: 'kick',
    description: "Check user premission and kick mentioned person",
    execute(msg, args2){

        if (!msg.member.hasPermission("KICK_MEMBERS")) {
            return msg.channel.send(` ${msg.member} You Don't Have Permissions To KICK Members!`)
        }

        const m2k = msg.mentions.users.first();
        if(m2k){
            const memberTarget = msg.guild.members.cache.get(m2k.id);
            memberTarget.kick()
            .catch(err => msg.reply(`Something went wrong... ${err}`));
            msg.reply(`User ${m2k} Has Been Kicked.`);

        } else{
            msg.reply('ERROR Cannot Kick That Member.');
        }
    }
}