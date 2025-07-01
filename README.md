তোমার দেওয়া README টা অনেক সুন্দরভাবে লেখা হয়েছে! নিচে আমি এটাকে একটু বেশি professional ও clean ভাবে সাজিয়ে দিলাম, সাথে logo টার height ঠিক করে দিয়েছি যাতে সম্পূর্ণ দেখা যায়। কিছু formatting ও বানান ভুল ঠিক করে দিয়েছি এবং layout আরও organized করেছি:


---

<h1 align="center">
  🤖 IMRAN BOT V4
</h1>

<p align="center">
  <img src="https://raw.githubusercontent.com/MR-IMRAN-60/ImranBypass/refs/heads/main/imranbotlogo.png" height="180"/>
</p>

<p align="center">
  <strong>🌟 Fully Customizable Facebook Messenger Bot | Premium Features | Easy to Use | Built with ❤️ by Imran Ahmed 🌟</strong>
</p>

---

## 📌 ABOUT ME

- 👤 **Name:** IMRAN AHMED  
- 🎂 **Age:** 20  
- 🔗 **Facebook:** [Imran Ahmed](https://www.facebook.com/Imran.Ahmed099)

---

## 🚀 STARTUP

```bash
npm install
node main/catalogs/IMRANA.js


---

🙌 CREDITS

🛠️ Original Project: BotPack by YanMaglinte

⚡ Modified by: Imran & Ryuko

🔌 Facebook Client: fca-ws3 by Kenneth Aceberos



---

✨ UPDATES

✅ Email notifications for box approval (Configurable via Config.json)

🔧 Custom console logging (See: configs/console.js)

🚫 Spam fix in ban system

💎 Premium-only commands (Enable with premium: true in command config)



---

⚙️ CONFIGURATION

File	Description

IMRAN.js	Auto restart & accept pending messages
Config.json	Bot name, prefix, admins, operators, etc.
appstate.json	Facebook login/session state



---

🔐 BOX APPROVAL SYSTEM

✅ Enable in Config.json by setting:

"approval": true

📌 Usage Examples:

approve list
approve box 4834812326646643016
approve remove 4834812326646643016


---

📥 HOW TO GET appstate.json

> Use FBState Exporter extension to get your Facebook login state.



🧭 Steps:

1. Download: fbstate_exporter-1.0.xpi


2. Open with Kiwi Browser


3. Load as extension


4. Login to Facebook


5. Open extension & click “Copy fbstate”


6. Paste into appstate.json




---

🧠 ADDING A COMMAND

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

⏩ Command aliases

🔒 Encrypted state manager

📊 Dashboard system for logs and analytics



---

> 💬 Developed with care by Imran Ahmed & Ryuko
📁 GitHub: IMRAN-BOTV4



---
