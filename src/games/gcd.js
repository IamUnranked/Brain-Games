import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getTask = () => {
  let number1 = getRandomNumber(1, 10);
  let number2 = getRandomNumber(1, 10);
  const gameQuestion = `${number1} ${number2}`;
  const gameCorrectAnswer = [];

  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  gameCorrectAnswer.push(`${number1 + number2}`);
  const temp = gameCorrectAnswer.join('');
  return [gameQuestion, temp];
};

const runGcd = () => runGame(description, getTask);

export default runGcd;
