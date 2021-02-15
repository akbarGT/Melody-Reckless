const Discord = require('discord.js')
module.exports = {
    name: 'serverinfo',
    description: "Check user premission and kick mentioned person",
    execute(msg, args2){

        const { guild } = msg
        const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setDescription('')
      .setThumbnail(icon)
      .addFields(
        {
          name: 'Region',
          value: region,
        },
        {
          name: 'Members',
          value: memberCount,
        },
        {
          name: 'Owner',
          value: owner.user.tag,
        },
        {
          name: 'AFK Timeout',
          value: afkTimeout / 60,
        }
      )

    msg.channel.send(embed)

    }
    }