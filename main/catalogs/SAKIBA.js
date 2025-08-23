console.clear();
const { spawn } = require("child_process");
const express = require("express");
const app = express();
const chalk = require('chalk');
const logger = require("./SAKIBC.js");  // Logger module
const path = require('path'); 

// PORT selection: fallback chain simplified
const PORT = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/website/ryuko.html'));
});

console.clear();

function startBot(message) {
    if(message) logger(message, "starting");

    console.log(chalk.blue('DEPLOYING MAIN SYSTEM'));
    logger.loader(`Deploying app on port ${chalk.blueBright(PORT)}`);

    // Corrected app.listen with callback
    app.listen(PORT, () => {
        logger.loader(`App deployed on port ${chalk.blueBright(PORT)}`);
    });

    // Start child process for SAKIBB.js
    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "SAKIBB.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    // Restart logic
    child.on("close", (codeExit) => {
        if ((codeExit !== 0) || (global.countRestart && global.countRestart < 5)) {
            global.countRestart = (global.countRestart || 0) + 1;
            startBot();
            return;
        }
    });

    child.on("error", function(error) {
        logger("An error occurred: " + JSON.stringify(error), "error");
    });
}

// Start bot initially
startBot();
