#!/usr/bin/env node

import chalk from 'chalk';
import rl from 'readline';

const r = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let gameState = Array.from(Array(9).keys());
let isPlayerX = true;
let gameWon = false;
let totalTurns = 0;

const winKey = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const setGameBoard = (gameState) => {
  const gameBoard = `
  ${gameState[0]} | ${gameState[1]} | ${gameState[2]}
 ---+---+---
  ${gameState[3]} | ${gameState[4]} | ${gameState[5]}
 ---+---+---
  ${gameState[6]} | ${gameState[7]} | ${gameState[8]}
 `;

  return gameBoard;
};

const checkForEndGame = (player, gameState) => {
  totalTurns += 1;
  const isDraw = totalTurns === 9;

  const playerState = gameState.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);

  for (const winClause of winKey) {
    const testWinCase = winClause.every((elem) => playerState.indexOf(elem) > -1);
    if (testWinCase) {
      gameWon = true;
      break;
    }
  }

  if (gameWon || isDraw) {
    if (gameWon) {
      console.log(chalk.green(setGameBoard(gameState)));
      console.log(chalk.green(`Winner is Player ${player}`));
    }

    if (isDraw && !gameWon) {
      console.log(chalk.grey(setGameBoard(gameState)));
      console.log(chalk.grey('Looks like this game ends in a draw!'));
    }

    console.log(chalk.green('Thanks for Playing!'));
    r.close();
    process.exit();
  }
};

const gameLoop = () => {
  const currentPlayer = isPlayerX ? 'X' : 'O';
  console.log(chalk.magenta(setGameBoard(gameState)));

  r.question(`Player ${currentPlayer} it is your turn.\nPlease enter selection: `, (input) => {
    const cleanInput = input.trim();

    if (isNaN(cleanInput) || cleanInput > 8) {
      console.log(chalk.red(`Inproper selection, user input must be a single digit from 0 to 8.`));
    } else if (isNaN(gameState[cleanInput])) {
      console.log(
        chalk.red(`Inproper selection, that square has already been played.\nPlease choose again.`),
      );
    } else {
      gameState[cleanInput] = currentPlayer;
      checkForEndGame(currentPlayer, gameState);
      isPlayerX = !isPlayerX;
    }

    gameLoop();
  });
};

gameLoop();
