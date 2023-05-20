import readlineSync from 'readline-sync';

const gameBase = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const fnc = game();
    const question = fnc[0];
    const correctAnswer = fnc[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}}\nLet's try again, ${userName}!`);
      return;
    }

    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameBase;
