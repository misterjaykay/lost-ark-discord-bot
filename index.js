const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const role = new Discord.Role();
const guild = new Discord.Guild();
// const member = new Discord.GuildMember();
// const presence = new Discord.Presence();

client.commands = new Discord.Collection();
const { prefix, token } = require("./config.json");
const axios = require("axios");
const express = require("express");
const app = express();
require("dotenv").config();

const mongoose = require("mongoose");
const schedule = require("node-schedule");

// mongoose.connect("mongodb://localhost/discord", {
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user
    .setPresence({
      status: "online", //You can show online, idle....
      activity: {
        name: "LOST ARK", //The message shown
        type: "PLAYING", //PLAYING: WATCHING: LISTENING: STREAMING:
      },
    })
    .then(console.log("Listening"))
    .catch(console.error);
});

// receiving commands/messages here
client.on("message", (message) => {
  // AFK channel ID = 633096197502140426
  if (message.content == "잠수봇") {
    // const afkChannel = client.channels.get("633096197502140426");
    // if (!afkChannel) return console.error("Channel Does Not Exist");
    channel
      .join("633096197502140426")
      .then((connection) => {
        console.log("Successfully Connected");
      })
      .catch((e) => {
        console.error(e);
      });
  }


  // // logging when using bot on localhost
  // if (!message.author.bot) {
  // fs.appendFile("log.txt", `\n${message.author.username}:'${message.content}', msgID:${message.id}`, (err) => {
  //   if (err) throw err;
  //   console.log("Message Logged.");
  // })
  // }

  // if (message.content == "fooz") {
  //   client.users.fetch('234086876061892608', false).then((user) => {
  //     user.send('heloo');
  //    });
  // }

  // Creating Game Channel ( Currently Not Work / Future Work)
  //   if (message.content === "qweaaaaaaaaaaaaaaar") {
  //     message.channel
  //       .createInvite(
  //         {
  //           channel: {
  //             name: "Arcade 🎮",
  //           },
  //           unique: true,
  //           maxAge: 1 * 60 * 1000, // maximum time for the invite, in milliseconds
  //           maxUses: 10, // maximum times it can be used
  //         },
  //         `Requested with command by ${message.author.tag}`
  //       )
  //       .then((invite) => {
  //         console.log(invite);
  //         console.log(`Requested with command by ${message.author.tag}`);
  //         message.channel.send(`Created an invite with a code of ${invite.code}`);
  //         message.channel.send(`${invite}`);
  //       })
  //       .catch(console.error);
  //   }

  // prefix 없는 command
  // Disabled b/c of too many spams.
  // if (message.content.startsWith("시카")) {
  //   message.channel.send("네에에");
  // }

  // channel creation
  //   if (message.content === "채널111") {
  //     message.guild.channels
  //       .create("test", { type: "text", parent: "604455432324644891" })
  //       .then((res) => {
  //         console.log(
  //           `Channel name:${res.name}(type:${res.type}) has been successfully created.`
  //         );
  //       })
  //       .catch(console.error);
  //   }

  // DM 을 거절하는 답장
  // if (
  //   message.channel.type == "dm" &&
  //   !message.author.bot &&
  //   !message.content.includes("!귓") &&
  //   !message.content.includes("!내마니또")
  // ) {
  //   return message.reply(
  //     "죄송합니다. 저는 현재 DM 을 받지 않고 있으며 (특정 명령어를 제외하고), DM 으로 명령어를 실행할수 없습니다. 문의사항이 있으면 rikimaru님께 DM 부탁드리겠습니다."
  //   );
  // }

  // DM 보내는 command
  // client.users.cache.get('<id>').send('<message>');

  // 공지사항 // bot posts a notice message in fixed channel.
  // Only admins can run this commands/arguments
  // if (message.member.roles.member._roles.includes("749687210013491303")) {
  //   if (message.content == "공지사항") {
  //     client.channels
  //       .fetch(`673382653730357248`)
  //       .then((channel) =>
  //         channel.send(
  //           `여러분 안녕하세요!\n` +
  //             `여러분 다름이 아니라 현재 제시카 BOT 을 제작중에 있습니다.\n` +
  //             `비록 다른 봇들보다는 대단한 봇이 될것 같진 않으나\n` +
  //             `그래도 혹시나 여러분들이 이런 기능이 있었으면 좋겠다 라는 의견을 받고싶어 공지사항을 올립니다.\n` +
  //             `혹시나 의견이 있으신분은 <@${message.author.id}>에게 DM을 보내주시면 감사하겠습니다.`
  //         )
  //       )
  //       .catch(console.error);
  //   }
  // }

  // role checker to see what roles does user have.
  //   if (message.content === "role check") {
  //     console.log("another testing:\n", message.member.roles.member._roles);
  //     if (message.member.roles.member._roles.includes("749687210013491303")) {
  //       console.log("This memeber has this role.");
  //     } else {
  //       console.log("Does not have this role.");
  //     }
  //   }

  // from here, you need prefix to pass this commands.
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  if (command.guildOnly && message.channel.type === "dm") {
    return message.reply(
      "죄송합니다. 저는 현재 DM 을 받지 않고 있으며, DM 으로 명령어를 실행할수 없습니다. 문의사항이 있으면 rikimaru님께 DM 부탁드리겠습니다."
    );
  }

  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }

    return message.channel.send(reply);
  }

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `현재 ${timeLeft.toFixed(0)}초의 쿨다운이\`${
          command.name
        }\` 명령어에 있습니다. 나중에 사용해주세요.`
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args, client, mongoose, guild);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
});

client.login(process.env.BOT_TOKEN);
