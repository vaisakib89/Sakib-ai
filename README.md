# 🤖 IMRAN BOT V4

![IMRAN BOT Logo](https://raw.githubusercontent.com/MR-IMRAN-60/ImranBypass/refs/heads/main/imranbotlogo.png)

**🌟 Fully Customizable Facebook Messenger Bot**  
**Premium Features • Easy to Use • Built with ❤️ by Imran Ahmed**

## 👤 ABOUT ME

- Name: ```IMRAN AHMED```br  
- **Age:** 20  
- **Facebook:** [Imran Ahmed](https://www.facebook.com/Imran.Ahmed099)

## 🚀 STARTUP

```bash
npm install
node main/catalogs/IMRANA.js
```
## 🛠️ CREDITS

Original Base: BotPack by YanMaglinte

Modified By: Imran & Ryuko

Facebook Client: fca-ws3 by Kenneth Aceberos

## ✨ FEATURES

✅ Email notifications for box approval (configurable via Config.json)

🔧 Custom console logging (see configs/console.js)

🚫 Spam prevention in ban system

💎 Premium-only commands (enable with premium: true in command config)


## ⚙️ CONFIGURATION

File	Description

IMRAN.js	Auto restart and pending message handler
Config.json	Bot name, prefix, admins, operators, etc.
appstate.json	Facebook login/session state


## 🔐 BOX APPROVAL SYSTEM

Enable in Config.json:

"approval": true

Usage examples:

approve list
approve box 4834812326646643016
approve remove 4834812326646643016

## 📥 HOW TO GET appstate.json

Use the FBState Exporter extension to export your Facebook login session:

Steps:

1. Download fbstate_exporter-1.0.xpi


2. Open with Kiwi Browser


3. Load as extension


4. Login to Facebook


5. Open the extension and click “Copy fbstate”


6. Paste the copied data into a file named appstate.json



## 🧠 ADDING A COMMAND

Example command template:
```
module.exports.config = {
  name: "example",
  version: "1.0.0",
  permission: 0,
  credits: "IMRAN",
  description: "An example command",
  prefix: true,
  category: "utility",
  usages: "example [args]",
  cooldowns: 5,
  premium: false,
  dependencies: {}
};

module.exports.run = async ({ api, event, args }) => {
  api.sendMessage("Hello from example command!", event.threadID);
};
```
## 🧩 UPCOMING FEATURES

⏩ Command aliases

🔒 Encrypted state manager

📊 Dashboard system for logs and analytics


📁 RESOURCES

GitHub Repository: IMRAN-BOTV4


> 💬 Developed with care by Imran Ahmed & Ryuko



Let me know if you want me to help with anything else!

