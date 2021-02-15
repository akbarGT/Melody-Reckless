module.exports = {
    name: 'pekk',
    description: "this is a pekk command!",
    execute(msg, args2){
        msg.channel.send('pekk back!');
    }
}