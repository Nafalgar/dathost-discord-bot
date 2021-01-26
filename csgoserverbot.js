const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch')
const username = config.USER
const password = config.PASSWORD
const serverid = config.SERVERID
const prefix = "!";
const FormData = require('form-data')

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async function(message) { 
	// Check if message is send by bot or misses prefix
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	// Filter prefix from command and arguments
	const commandBody = message.content.slice(prefix.length);
 	const args = commandBody.split(' ');
  	const command = args.shift().toLowerCase();

  	// Add commands here
  	if (command === 'start') {
  		fetch(`https://dathost.net/api/0.1/game-servers/${serverid}/start`, {
		    headers: {
		      	authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
		    },
		    method: 'POST'
		}).then(checkResponseStatus)
		.then(message.reply('Starting server...'))
		.then(res => res.json())
    	.then(json => console.log(json))
    	.catch(err => console.log(err))
  	}

  	if (command === 'stop') {
  		fetch(`https://dathost.net/api/0.1/game-servers/${serverid}/stop`, {
		    headers: {
		      	authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
		    },
		    method: 'POST'
		}).then(checkResponseStatus)
		.then(message.reply('Stopping server...'))
		.then(res => res.json())
    	.then(json => console.log(json))
    	.catch(err => console.log(err))
  	}

  	if (command === 'exec') {
  		let formdata = new FormData();
		formdata.append("line", args.join(' '));
  		fetch(`https://dathost.net/api/0.1/game-servers/${serverid}/console`, {
		    headers: {
		      	authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`,
		    },
		    method: 'POST',
		    body: formdata
		}).then(checkResponseStatus)
		.then(message.reply('Command issued.'))
		.then(res => res.json())
    	.then(json => console.log(json))
    	.catch(err => console.log(err))
  	}                
});   

client.login(config.BOT_TOKEN).then(() => console.log('Logged in successfully with bot token.'));

// Returns error if status response is not OK
function checkResponseStatus(res) {
    if(res.ok){
        return res
    } else {
        throw new Error(`The HTTP status of the response: ${res.status} (${res.statusText})`);
    }
}