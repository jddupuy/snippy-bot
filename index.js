const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config/default.json');
const _ = require('lodash');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  const message = msg.content.toLowerCase();

  if (message === 're') {
    msg.channel.send('REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
  }

  if (message === 'betty dab') {
    msg.channel.send('https://i.imgur.com/rwElyFd.gif')
  }

  if (message === 'ligma') {
    msg.channel.send('https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif');
    msg.channel.send('LIGMA BALLS');
  }
});

client.login(_.get(config, 'discord.secret'));