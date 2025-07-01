Here’s a professionally polished version of your IMRAN BOT V4 documentation in a clean and structured format, preserving your brand identity and credits while making it look sleek and premium:


---

<h1 align="center">
  🤖 IMRAN BOT V4
</h1>

<p align="center">
  <img src="https://raw.githubusercontent.com/MR-IMRAN-60/ImranBypass/refs/heads/main/imranbotlogo.png" height="180"/>
</p>

<p align="center">
  <strong>🌟 Fully Customizable Facebook Messenger Bot<br>Premium Features • User Friendly • Built with ❤️ by Imran Ahmed 🌟</strong>
</p>

---

## 👤 ABOUT THE DEVELOPER

- **Name:** IMRAN AHMED  
- **Age:** 20  
- **Facebook:** [Imran Ahmed](https://www.facebook.com/Imran.Ahmed099)

---

## 🚀 QUICK START

```bash
npm install
node main/catalogs/IMRANA.js


---

🛠️ CORE CREDITS

Original Base: BotPack by YanMaglinte

Modifications & Upgrades: Imran & Ryuko

Messenger Client: fca-ws3 by Kenneth Aceberos



---

✨ HIGHLIGHTED FEATURES

📧 Email Notifications for Box Approval (Toggle via Config.json)

🧪 Custom Console Logger (configs/console.js)

🚫 Spam Prevention in Ban System

💎 Premium Command Toggle (premium: true in configs)



---

⚙️ CONFIGURATION GUIDE

File Name	Description

IMRAN.js	Auto restart + pending message handler
Config.json	Bot settings (name, prefix, admins, etc.)
appstate.json	Facebook login/session credentials



---

🔐 BOX APPROVAL SYSTEM

Enable in Config.json:

"approval": true

Usage Examples:

approve list
approve box 4834812326646643016
approve remove 4834812326646643016


---

📥 GETTING appstate.json

Step-by-Step (Using FBState Exporter Extension):

1. Download: fbstate_exporter-1.0.xpi


2. Open using Kiwi Browser


3. Load as extension


4. Log in to Facebook


5. Open the extension → Click “Copy fbstate”


6. Paste output into appstate.json




---

🧠 CREATING A NEW COMMAND

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


---

🧩 UPCOMING FEATURES

⏩ Command Aliases

🔒 Encrypted State Manager

📊 Web Dashboard (Logs, Analytics)



---

📁 RESOURCES

GitHub Repo: IMRAN-BOTV4



---

<p align="center">
  💬 Developed with dedication by <strong>Imran Ahmed</strong> & <strong>Ryuko</strong>
</p>
```
---
