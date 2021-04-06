#!/usr/bin/env node

import chalk from 'chalk';
import rl from 'readline';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ todos: [] }).write();

const args = process.argv;
const commands = ['new', 'get', 'complete', 'help'];
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

const prompt = (question) => {
  const r = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  return new Promise((resolve, error) => {
    r.question(question, (answer) => {
      r.close();
      resolve(answer);
    });
  });
};

const newTodo = () => {
  const q = chalk.blue('Type in your todo\n');
  prompt(q).then((todo) => {
    db.get('todos')
      .push({
        title: todo,
        complete: false,
      })
      .write();
  });
};

const getTodos = () => {
  const todos = db.get('todos').value();
  let index = 1;
  todos.forEach((todo) => {
    let todoText = chalk.green(`${index++}. ${todo.title}`);
    if (todo.complete) {
      todoText += ' ✅  ';
      todoText = chalk.strikethrough(todoText);
    }
    console.log(todoText);
  });
};

const completeTodo = () => {
  // check that length
  if (args.length !== 4) {
    errorLog('invalid number of arguments passed for complete command');

    return;
  }

  let n = Number(args[3]);
  // check if the value is a number
  if (isNaN(n)) {
    errorLog('please provide a valid number for complete command');

    return;
  }

  // check if correct length of values has been passed
  let todosLength = db.get('todos').value().length;
  if (n > todosLength) {
    errorLog('invalid number passed for complete command.');

    return;
  }

  // update the todo item marked as complete
  db.set(`todos[${n - 1}].complete`, true).write();
};

const errorLog = (err) => {
  console.log(chalk.red(err));
};

if (args.length > 3 && args[2] !== 'complete') {
  errorLog(`Only one argument can be accepted; actual: ${args.length}`);
  console.log(usageText);
}

switch (args[2]) {
  case 'help':
    console.log(usageText);
    break;
  case 'new':
    newTodo();
    break;
  case 'get':
    getTodos();
    break;
  case 'complete':
    completeTodo();
    break;
  default:
    errorLog('invalid command passed');
    console.log(usageText);
}
