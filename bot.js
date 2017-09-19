  /*

  A ping pong bot, whenever you send "ping", it replies "pong".

*/



// Import the discord.js module

const Discord = require('discord.js');



// Create an instance of a Discord client

const client = new Discord.Client();





// The ready event is vital, it means that your bot will only start reacting to information

// from Discord _after_ ready is emitted

client.on('ready', () => {

  console.log('I am ready!');

});



// Create an event listener for messages

client.on('message', message => {

  // If the message is "ping"

  if (message.content === 'b!ping') {

    // Send "pong" to the same channel

    message.channel.send('Pong!');

  }

   if (message.content === 'b!help') {
     message.channel.reply('sending help! Please check your DMs. 👍')
     message.author.sendMessage("**Babu commands: **")
    message.author.sendMessage("The prefix for Babu is b!")
    message.author.sendMessage("help - Commands and help.")
    message.author.sendMessage("hq - Sends a DM with an invite to the Babu discord.")
     message.author.sendMessage("ping - Classics.")
 
   }

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
