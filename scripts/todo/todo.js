#!/usr/bin/env node

import chalk from "chalk";

const args = process.argv;
const commands = ["new", "get", "complete", "help"];
const usageText = `
todo helps you manage you todo tasks.

usage:
  todo <command>

  commands can be:

  new:      used to create a new todo
  get:      used to retrieve your todos
  complete: used to mark a todo as complete
  help:     used to print the usage guide
`;

const errorLog = (err) => {
  console.log(chalk.red(err));
};

if (args.length > 3) {
  errorLog(`Only one argument can be accepted; actual: ${args.length}`);
  console.log(usageText);
}

switch (args[2]) {
  case 'help':
    console.log(usageText);
    break;
  case 'new':
    break
  case 'get':
    break
  case 'complete':
    break
  default:
    errorLog('invalid command passed');
    console.log(usageText);
}
