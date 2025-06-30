const axios = require("axios");

module.exports.config = {
  name: "bot",
  version: "2.2.0",
  permission: 0,
  credits: "IMRAN",
  description: "Chat with a Simsimi-like bot (reply + trigger words support)",
  prefix: false,
  premium: false,
  category: "Example",
  usages: "[your message]",
  cooldowns: 0
};

// Cute/funny replies
const cuteReplies = [
  "I love you 💝",
  "এ বেডা তোগো GC এর C E O বাপ্পি কই😌",
  "তোর বাড়ি কি উগান্ডা এখানে হুম",
  "Bot না জানু,বল 😌",
  "বলো জানু 🌚",
  "তোর কি চোখে পড়ে না আমি ইমরান বস এর সাথে ব্যাস্ত আসি😒",
  "𝙏𝙢𝙧 𝙣𝙖𝙣𝙞 𝙧 𝐨𝐢 𝐭𝐚  😑🥺",
  "amr Jan lagbe,Tumi ki single aso?",
  "𝙏𝙪𝙢𝙖𝙧 BF 𝙣𝙖𝙞 ,𝙩𝙖𝙮 𝙖𝙢𝙠 𝙙𝙖𝙠𝙨𝙤?😂😂😂"
];

module.exports.run = async ({ api, event, args }) => {
  const { threadID, messageID, senderID } = event;
  const query = args.join(" ");

  if (!query) {
    const reply = cuteReplies[Math.floor(Math.random() * cuteReplies.length)];
    return api.getUserInfo(senderID, (err, result) => {
      if (err) return console.error(err);

      const userName = result[senderID].name;

      api.sendMessage({
        body: `${userName}, ${reply}`,
        mentions: [{ tag: userName, id: senderID }]
      }, threadID, (err, info) => {
        if (err) return;
        global.client.handleReply.push({
          name: this.config.name,
          messageID: info.messageID,
          author: senderID
        });
      }, messageID);
    });
  }

  try {
    const response = await axios.get(`https://www.noobs-api.rf.gd/dipto/baby?text=${encodeURIComponent(query)}&senderID=100075122837809&font=1`);
    const reply = response.data.reply || "I didn't get that. Try asking something else!";

    api.sendMessage(reply, threadID, (err, info) => {
      if (err) return;
      global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        author: senderID
      });
    }, messageID);
  } catch (error) {
    console.error("API Error:", error.message);
    api.sendMessage("Something went wrong while contacting the bot service.", threadID, messageID);
  }
};

module.exports.handleReply = async ({ api, event }) => {
  const { threadID, messageID, senderID, body } = event;

  try {
    const response = await axios.get(`https://www.noobs-api.rf.gd/dipto/baby?text=${encodeURIComponent(body)}&senderID=100075122837809&font=1`);
    const reply = response.data.reply || "I didn't get that. Try asking something else!";

    api.sendMessage(reply, threadID, (err, info) => {
      if (err) return;
      global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        author: senderID
      });
    }, messageID);
  } catch (error) {
    console.error("API Error:", error.message);
    api.sendMessage("Something went wrong while contacting the bot service.", threadID, messageID);
  }
};

module.exports.handleReaction = async ({ api, event }) => {
  const { reaction, messageReply } = event;

  if (reaction === '😡') {
    try {
      await api.unsendMessage(messageReply.messageID);
    } catch (err) {
      console.error("Failed to unsend message:", err.message);
    }
  }
};
