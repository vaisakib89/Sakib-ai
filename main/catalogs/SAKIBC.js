const chalk = require('chalk');
const gradient = require('gradient-string');
const config = require("../configs/console.json");

// Colors from config
const successColor = config.console.success || 'green';
const errorColor = config.console.error || 'red';
const warnColor = config.console.warn || 'yellow';

// Main logger function
module.exports = (text, type) => {
    switch (type) {
        case "warn":
            process.stderr.write(chalk[warnColor](config.console.editNames.warn) + ` - ${text}\n`);
            break;
        case "error":
            process.stderr.write(chalk[errorColor](config.console.editNames.error) + ` - ${text}\n`);
            break;
        case "load":
            process.stderr.write(chalk[successColor]('new user') + ` - ${text}\n`);
            break;
        default:
            process.stderr.write(chalk[successColor](type) + ` - ${text}\n`);
            break;
    }
};

// Shortcut methods
module.exports.error = (text) => {
    process.stderr.write(chalk[errorColor](config.console.editNames.error) + ` - ${text}\n`);
};

module.exports.err = (text) => {
    process.stderr.write(chalk[errorColor](config.console.editNames.error) + ` - ${text}\n`);
};

module.exports.warn = (text) => {
    process.stderr.write(chalk[warnColor](config.console.editNames.warn) + ` - ${text}\n`);
};

// Loader function
module.exports.loader = (data, option) => {
    switch(option) {
        case "warn":
            process.stderr.write(chalk[warnColor](config.console.editNames.warn) + ` - ${data}\n`);
            break;
        case "error":
            process.stderr.write(chalk[errorColor](config.console.editNames.error) + ` - ${data}\n`);
            break;
        default:
            process.stderr.write(chalk[successColor](config.console.editNames.success) + ` - ${data}\n`);
            break;
    }
};
