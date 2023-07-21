// functions/log.js

const chalk = require("chalk");

function log(...args) {
    const [message, option1] = args;
    if (option1 != undefined) {
        if (option1.trim().toLowerCase() == "uppercase") {
            console.log(message.toUpperCase());
        } else if (option1.trim().toLowerCase() == "lowercase") {
            console.log(message.toLowerCase());
        } else {
            console.error(chalk.red(`[JACOB] ⛔ Argument 2 in #log can only be "uppercase" or "lowercase".`));
            process.exit(1);
        }
    } else {
        console.log(message)
    }
}

module.exports = log;
