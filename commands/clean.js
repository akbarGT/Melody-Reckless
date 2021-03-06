module.exports = {
    name: 'clean',
    description: "Delete Specified Amount Of Messages",
    execute(msg, args2) {

        if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
            return msg.channel.send(` ${msg.member} Insufficient Permissions To Delete Messages!`)
        }

        if (isNaN(args2[0]) || parseInt(args2[0]) <= 0) {
            return msg.reply(`Please Enter The Amount of Messages To Delete.`)
        }

        let deleteAmount;
        if (parseInt(args2[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args2[0]) + 1;
        }

        msg.channel.bulkDelete(deleteAmount, true)
            .catch(err => msg.reply(`Something went wrong... ${err}`));
        msg.reply(` ${deleteAmount - 1} Messages Deleted Successfully.`);

        ///////////////////////////////        ///////////////////////////////////////////////////
        // if(!args2[0]) return message.channel.reply('Please enter the amount of messages you want to delete.');
        // if(isNaN(args2[0])) return message.channel.reply("Please enter value in Numbers");

        // if(args2[0] > 100) return message.channel.reply("You cant delete more than 100 at a time");
        // if(args2[0] < 1) return message.channel.reply("You must delete atleast one message");

        // await message.channel.messages.fetch({limit: args2[0]}).then(messages =>{
        //     msg.channel.bulkDelete(messages);
        // })


    }
}