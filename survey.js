const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// organize questions in an array vs nested layers of rl.questions()
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

/* standard template for finished profile -- I would have liked
to use an object for the questions and can therefore have a more
descriptive response object, but I couldn't figure out how */
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

/* recursive function that iterates through questions
and pushes responses to a response object */
const ask = function(questions, responses, index) {
  // base case below, print response and end readline
  if (questions[index] === undefined) {
    console.log("Here is your fun profile!");
    printProfile(responses);
    rl.close();
  } else {
    // otherwise run recursive case
    rl.question(questions[index], (answer) => {
      responses[index] = answer;

      // recursively call ask for next question
      ask(questions, responses, index + 1);
    });
  }
};

ask(questions, responses, 0);