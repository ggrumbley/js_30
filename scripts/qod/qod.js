#!/usr/bin/env node

import chalk from "chalk";
import axios from "axios";

const QUOTES_URL = "https://quotes.rest/qod";

axios
  .get(QUOTES_URL)
  .then((res) => {
    const quote = res.data.contents.quotes[0].quote;
    const author = res.data.contents.quotes[0].author;
    const logStatement = chalk.green(`${quote} - ${author}`);
    console.log(logStatement);
  })
  .catch((err) => {
    const logError = chalk.red(err);
    console.log(logError);
  });
