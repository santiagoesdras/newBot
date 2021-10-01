require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({});

const { readdirSync } = require("fs");

const keepAlive = require("./utils/server.js");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith ('.js'));

for (const file of commandFiles){
    
    const commands = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    
}

client.on('message' , (message) =>{
    console.log("debug");

    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command))
    if (cmd){
        cmd.execute(client, message, args)
    }

});

client.login(process.env.TOKEN);