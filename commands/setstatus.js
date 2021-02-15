module.exports = {
    name: 'setstatus',
    description: "Changes BOT's Discord Status",
    execute(msg, args2, discordClient) {

        const stts = msg.content.replace('-setstatus', '')
        discordClient.user.setPresence({
            activity: {
                name: stts,
                type: 0,
            }
        })
    }

}