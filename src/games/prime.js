import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  const numberSqrt = Math.sqrt(number);
  if (number === 1) {
    return true;
  }
  for (let i = 2; i <= numberSqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const number = getRandomNumber(1, 10);
  const question = number.toString();
  const gameCorrectAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, gameCorrectAnswer];
};

const runPrime = () => runGame(description, game);

export default runPrime;
