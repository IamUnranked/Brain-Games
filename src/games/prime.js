import gameBase from '../src/index.js';
import random from '../src/utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
function isPrime(number) {
  const numberSqrt = Math.sqrt(number);
  for (let i = 2; i <= numberSqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const game = () => {
  const number = random(1, 10);
  const question = number.toString();
  const gameCorrectAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, gameCorrectAnswer];
};

const prime = () => gameBase(description, game);

export default prime;
