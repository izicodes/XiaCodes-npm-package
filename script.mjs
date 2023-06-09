#!/usr/bin/env node

// // Define ANSI escape code constants
// const colors = {
//   reset: "\x1b[0m",
//   bright: "\x1b[1m",
//   dim: "\x1b[2m",
//   underscore: "\x1b[4m",
//   blink: "\x1b[5m",
//   reverse: "\x1b[7m",
//   hidden: "\x1b[8m",
//   fg: {
//     black: "\x1b[30m",
//     red: "\x1b[31m",
//     green: "\x1b[32m",
//     yellow: "\x1b[33m",
//     blue: "\x1b[34m",
//     magenta: "\x1b[35m",
//     cyan: "\x1b[36m",
//     white: "\x1b[37m",
//   },
//   bg: {
//     black: "\x1b[40m",
//     red: "\x1b[41m",
//     green: "\x1b[42m",
//     yellow: "\x1b[43m",
//     blue: "\x1b[44m",
//     magenta: "\x1b[45m",
//     cyan: "\x1b[46m",
//     white: "\x1b[47m",
//   },
// };

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// console.log(colors.fg.blue + "Hi" + colors.reset);

// rl.question("What's your age? ", function (age) {
//   console.log(age);
//   rl.close();
// });

//     .-=-.   .-=-.
//    ( 0   \V/   0 )
//     \     O     /
//      `.__ # __.'
//       .'  #  '.
// jgs  (o  /#\  o)
//       )/'   '\(
//      (         )

import chalk from "chalk";

const log = console.log;

const star = chalk.hex("#e9d795")("★ ");

const message = chalk.hex("#e995cb")(
  "~  " + chalk.underline("Welcome to XiaCodes' Socials Card package~!") + "  ~"
);
const intro = "Here are my social links:";

const tumblr = chalk.hex("#cad9ff")(
  "Tumblr: " + chalk.reset("https://xiacodes.tumblr.com/")
);
const insta = chalk.hex("#bcffb7")(
  "Insta: " + chalk.reset("https://instagram.com/_xiacodes_")
);
const linkedin = chalk.hex("#ffcbb7")(
  "LinkedIn: " + chalk.reset("https://linkedin.com/in/isabelle-zennah")
);
// tumblr, instgram, linkedin, github, twitter

// message = (chalk.hex("#8e99e3")(message));

log("\n");
log("                       " + message);
log("     .-=-.   .-=-.    " );
log("    ( 0   \\V/   0 )                " + intro);
log("     \\     O     /");
log("      `.__ # __.`           " + star + tumblr);
log("       .'  #  '.        " + star + insta);
log("      (o  /#\\  o)     " + star + linkedin);
log("       )/'   '\\(");
log("      (         )           " + star + chalk.italic.dim("Let's connect and have some fun~! ") + star);
