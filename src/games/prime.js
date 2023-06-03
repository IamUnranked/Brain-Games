import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  const numberLimit = Math.sqrt(number);
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= numberLimit; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getTask = () => {
  const number = getRandomNumber(1, 10);
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrime = () => runGame(description, getTask);

export default runPrime;
