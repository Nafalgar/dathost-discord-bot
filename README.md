# discord-csgo-bot

Simple Node.js app that starts a Discord bot with some basic commands to communicate with the DatHost API to manipulate a dedicated CS:GO server.
You can create an account and rent a CSGO server on DatHost here: https://dathost.net

## Requirements

- Node.js
- npm
- DatHost account and server

## Config file

The `config.json` file contains several fields that need to be filled in:
- `BOT-TOKEN` : This is your Discord bot token that you create on the [Discord developer page]{https://discord.com/developers/applications}.
- `USER`: Your login email for DatHost.
- `PASSWORD`: Your password for DatHost.
- `SERVERID`: The ID of the server you wish to issue commands to. You can find this ID by going to the control panel page of your server and copying the ID from the URL. 

## Installation

- Create a bot on the [Discord developer page]{https://discord.com/developers/applications}.
- Add the bot to your Discord server (check out Discord developer documentation for more info).
- Fill in the config file with the necessary credentials.
- Install the required packages with `npm install`.
- Run the bot with `node csgoserverbot.js`.
- (Optional) Run the bot with pm2 or some other tool that keeps the bot alive.

## Using the bot

Currently there are 4 commands that the bot listens to:

- `!start`: Boots up the server.
- `!stop`: Shuts down the server.
- `!exec <commands>': Issues commands to the console of your server (i.e. `mp_warmup_end` or `sv_cheats 1`).

Adding new commands is as simple as adding a new command if statement to the code block.
The DatHost API can be found here: https://dathost.net/api
The Discord.js API can be found here: https://discord.js.org/#/docs/main/stable/general/welcome
