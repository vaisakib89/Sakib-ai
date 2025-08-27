module.exports.config = {
  name: "emojimix",
  version: "1.0.2",
  permission: 0,
  credits: "SAKIB", // Original author
  description: "Combine two emojis into one",
  prefix: true,
  category: "image",
  usages: "[emoji1 | emoji2]",
  cooldowns: 5,
  dependencies: {
    "fs-extra": "",
    "request": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event,args }) => {  {

  const fs = require("fs-extra");

  const request = require("request");

const axios = require('axios')

const apis = await axios.get('https://raw.githubusercontent.com/MOHAMMAD-NAYAN-07/Nayan/main/api.json')

const n = apis.data.api

 const { threadID, messageID, senderID, body } = event; 

try {

const content = args.join(" ").split("|").map(item => item = item.trim());

let emoji1 = content[0]

let emoji2 = content [1]

if (!args[0])

  return api.sendMessage("Wrong format!\nUse "+global.config.PREFIX+this.config.name+" "+this.config.usages, event.threadID, event.messageID);

 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);

 return request(encodeURI(`${n}/nayan/emojimix?emoji1=${emoji1}&emoji2=${emoji2}`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback()); 

} catch (err){

return api.sendMessage("Can't mix "+emoji1+" and "+emoji2, event.threadID, event.messageID)

}   

}}