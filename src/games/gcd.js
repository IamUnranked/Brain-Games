/* eslint-disable no-param-reassign */
import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};

const getTask = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const question = `${number1} ${number2}`;
  const gameCorrectAnswer = gcd(number1, number2);

  return [question, gameCorrectAnswer.toString()];
};

const runGcd = () => runGame(description, getTask);

export default runGcd;
