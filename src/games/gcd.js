import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  let digit1 = number1;
  let digit2 = number2;
  while (digit1 !== 0 && digit2 !== 0) {
    if (digit1 > digit2) {
      digit1 %= digit2;
    } else {
      digit2 %= digit1;
    }
  }
  return digit1 + digit2;
};

const getTask = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const question = `${number1} ${number2}`;
  const correctAnswer = gcd(number1, number2).toString();

  return [question, correctAnswer];
};

const runGcd = () => runGame(description, getTask);

export default runGcd;
