import readlineSync from 'readline-sync';

const gameEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(descriptionGame);
  let count = 0;
  let answer = '';
  let correctAnswer = '';
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const even = randomNumber % 2 === 0;
    if (even) {
      correctAnswer = 'yes';
    }
    if (!even) {
      correctAnswer = 'no';
    }
    console.log(`Question: ${randomNumber}`);
    answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      count += 1;
    }
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}) `);
      console.log(`Try again, ${userName}!`);
      break;
    }
    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
  return '';
};

export default gameEven;
