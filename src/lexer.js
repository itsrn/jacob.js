const print = require("./functions/print");
const chalk = require("chalk");

// Tokenize the code
function tokenize(code) {
  // Match tokens using regular expressions
  const regex = /print\(["']([^"']+)["']\);?/g;
  const matches = code.match(regex);

  if (!matches) {
    throw new Error("    No valid tokens found.");
  }

  // Extract the message from each matched token
  return matches.map((match) => match.slice(7, -3));
}

// Run the program
function run(tokens) {
  for (const token of tokens) {
    try {
      print(token);
    } catch (error) {
      console.error(chalk.red(" ⛔ Error during execution:"));
      console.error(chalk.red(`    ${error.message}`));
      process.exit(1);
    }
  }
}

module.exports = {
  tokenize,
  run,
};
