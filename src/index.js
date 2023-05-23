import readlineSync from 'readline-sync';

const roundCount = 3;

const runGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundCount; i += 1) {
    const getTask = game();
    const question = getTask[0];
    const correctAnswer = getTask[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}}
      \nLet's try again, ${userName}!`);
      return;
    }

    console.log(`Congratulations, ${userName}!`);
  }
};

export default runGame;
