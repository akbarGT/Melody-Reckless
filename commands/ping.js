module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(msg, args2, discordClient){
        msg.reply('Calculating ping...').then((resultMessage) => {
            const ping = resultMessage.createdTimestamp - msg.createdTimestamp
      
            resultMessage.edit(`Bot latency: ${ping}, API Latency: ${discordClient.ws.ping}`)
          })
    }
}