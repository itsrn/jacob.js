const { tokenize, run } = require("./lexer");
const fs = require("fs");
const chalk = require("chalk");

// Read the file path from command line arguments
const filePath = process.argv[2];

// Check if the file has the .jacob extension
if (!filePath || !filePath.endsWith(".jacob")) {
  console.error(
    chalk.red(" ⛔ Invalid file. Only .jacob files are supported.")
  );
  process.exit(1);
}

// Read the content of the file
let fileContent;
try {
  fileContent = fs.readFileSync(filePath, "utf-8");
} catch (error) {
  console.error(chalk.red(` ⛔ Error reading file: ${filePath}`));
  console.error(chalk.red(error.message));
  process.exit(1);
}

console.log(chalk.green(` ⏰ Compiling file: ${filePath}`));

// Tokenize the code
let tokens;
try {
  tokens = tokenize(fileContent);
} catch (error) {
  console.error(chalk.red(" ⛔ Error during tokenization:"));
  console.error(chalk.red(error.message));
  process.exit(1);
}

console.log(chalk.green(" 🎉 Successfully compiled the code!"));

// Run the program
run(tokens);
