// functions/log.js

const chalk = require("chalk");

function log(...args) {
    const [message, option1, option2] = args;
    if (option1 != undefined) {
        if (option1.trim().toLowerCase() == "uppercase") {
            if(option2 != undefined && option2.trim().toLowerCase() == "blue"){
                console.log(chalk.blue(message.toUpperCase()));
            } else if (option2 != undefined && option2.trim().toLowerCase() == "red") {
                console.log(chalk.red(message.toUpperCase()));
            } else if (option2 != undefined && option2.trim().toLowerCase() == "yellow") {
                console.log(chalk.yellow(message.toUpperCase()));
            } else {
                console.log(message.toUpperCase());
            }
        } else if (option1.trim().toLowerCase() == "lowercase") {
            if(option2 != undefined && option2.trim().toLowerCase() == "blue"){
                console.log(chalk.blue(message.toLowerCase()));
            } else if (option2 != undefined && option2.trim().toLowerCase() == "red") {
                console.log(chalk.red(message.toLowerCase()));
            } else if (option2 != undefined && option2.trim().toLowerCase() == "yellow") {
                console.log(chalk.yellow(message.toLowerCase()));
            } else {
                console.log(message.toLowerCase());
            }
        } else {
            if(option2 != undefined && option2.trim().toLowerCase() == "blue"){
                console.log(chalk.blue(message));
            } else if (option2 != undefined && option2.trim().toLowerCase() == "red") {
                console.log(chalk.red(message));
            } else if (option2 != undefined && option2.trim().toLowerCase() == "yellow") {
                console.log(chalk.yellow(message));
            } else {
                console.log(message);
            }
        }
    } else {
        if(option2 != undefined && option2.trim().toLowerCase() == "blue"){
            console.log(chalk.blue(message));
        } else if (option2 != undefined && option2.trim().toLowerCase() == "red") {
            console.log(chalk.red(message));
        } else if (option2 != undefined && option2.trim().toLowerCase() == "yellow") {
            console.log(chalk.yellow(message));
        } else {
            console.log(message);
        }
    }
}

module.exports = log;
