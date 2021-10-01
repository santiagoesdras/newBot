const Discord = require('discord.js');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({intents});
require("dotenv").config();
const fs = require('fs');

const {Client, Collection, Guild} = require("discord.js")
const keepAlive = require("./utils/server.js");

client.on('message' , (message) =>{
    console.log("debug");
});

client.login(process.env.TOKEN);


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith ('.js'));

for (const file , commandFiles){
    
    const commands = require(`./commands/${file}`);
    client.commands.set(command.name, command);

}