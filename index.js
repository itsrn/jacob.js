#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const filePath = process.argv[2];

if (!filePath || !filePath.endsWith(".jacob")) {
  console.error(
    chalk.red("[JACOB] ⛔ Invalid file. Only .jacob files are supported.")
  );
  process.exit(1);
}

let fileContent;
try {
  fileContent = fs.readFileSync(filePath, "utf-8");
} catch (error) {
  console.error(chalk.red(`[JACOB] ⛔ Error reading file: ${filePath}`));
  console.error(chalk.red(`        ${error.message}`));
  process.exit(1);
}

var codeToExecute = fileContent;

const varsDir = path.join(__dirname, "variables");

fs.readdirSync(varsDir).forEach((file) => {
  if (file.endsWith(".js")) {
    const variableName = file.slice(0, -3);
    const variablePath = path.join(varsDir, file);
    const importedVar = require(variablePath);

    global[variableName] = importedVar;
  }
});

const regex = /\$([a-zA-Z0-9]+)\(\)/g;
let modifiedText = codeToExecute;

let match2;
while ((match2 = regex.exec(codeToExecute)) !== null) {
  const variableName = match2[1];
  if (global[variableName]) {
    const value = global[variableName]();
    const regex2 = new RegExp(`\\$${variableName}\\(\\)`, "g");
    modifiedText = modifiedText.replace(regex2, String(value));
  } else {
    console.error(chalk.yellow(`[JACOB] ⚠ Variable ${variableName} is not defined.`));
    process.exit(1);
  }
}

codeToExecute = modifiedText;

const functionsDir = path.join(__dirname, "functions");

fs.readdirSync(functionsDir).forEach((file) => {
  if (file.endsWith(".js")) {
    const functionName = file.slice(0, -3);
    const functionPath = path.join(functionsDir, file);
    const importedFunction = require(functionPath);

    global[functionName] = importedFunction;
  }
});

const functionCallPattern = /#([a-zA-Z0-9]+)\[([^[\]]+)\]/g;
let match;

while ((match = functionCallPattern.exec(codeToExecute)) !== null) {
  const functionName = match[1];
  const functionArgumentsString = match[2];
  const functionArguments = functionArgumentsString.split(";");
  if (global[functionName]) {
    global[functionName](...functionArguments);
  } else {
    console.error(chalk.yellow(`[JACOB] ⚠ Function ${functionName} is not defined.`));
    process.exit(1);
  }
}
