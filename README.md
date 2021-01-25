# discord-csgo-bot

Simple Node.js app that starts a Discord bot with some basic commands to communicate with the DatHost API to manipulate a dedicated CS:GO server.

## Requirements

- Node.js
- npm

## Config file

The `config.json` file contains several fields that need to be filled in:
- `BOT-TOKEN` : This is your Discord bot token that you create on the [Discord developer page]{https://discord.com/developers/applications}.
- `USER`: This is your login email for DatHost.
- `PASSWORD`: This is your password for DatHost.
- `SERVERID`: This is the ID of the server you wish to issue commands to. You can find this ID by going to the control panel page of your server and copying the ID from the URL.

## How to use

- Create a bot on the [Discord developer page]{https://discord.com/developers/applications}.
- Add the bot to your Discord server (check out Discord developer documentation for more info).
- Fill in the config file with the necessary credentials.
- Install the required packages with `npm install`.
- Run the bot with `node csgoserverbot.js`.
- (Optional) Run the bot with pm2 or some other tool that keeps the bot alive.
