const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What is your name? Or nickname if you have one? ",
  "What do you like doing in your spare time (e.g., coding, coding, coding)? ",
  "What genre do you listen to while doing so? ",
  "Which meal is your favorite (e.g., breakfast, lunch)? ",
  "What do you enjoy eating for that meal? ",
  "What sport do you like? ",
  "Do you have any super powers? "
];

const responses = {};

const printProfile = function(responses) {
  console.log(`
  Hi, my name is ${responses[0]}!
  I spend all of my free time ${responses[1]},
  which I do while blasting ${responses[2]}.
  My favorite food is ${responses[4]}, which I
  have during ${responses[3]}. When I'm not
  eating or ${responses[1]}, I like doing some ${responses[5]}.
  I haven't told you yet, but I can also ${responses[6]}!`);
};

const ask = function(questions, responses, index) {
  if (questions[index] === undefined) {
    console.log("Here is your fun profile!");
    printProfile(responses);
    rl.close();
  } else {
    rl.question(questions[index], (answer) => {
      responses[index] = answer;

      ask(questions, responses, index + 1);
    });
  }
};

ask(questions, responses, 0);