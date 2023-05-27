import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  const numberSqrt = Math.sqrt(number);
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= numberSqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getTask = () => {
  const number = getRandomNumber(1, 10);
  const gameQuestion = number.toString();
  const gameCorrectAnswer = isPrime(number) ? 'yes' : 'no';
  return [gameQuestion, gameCorrectAnswer];
};

const runPrime = () => runGame(description, getTask);

export default runPrime;
