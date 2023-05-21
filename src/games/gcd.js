import gameBase from '../index.js';
import random from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const game = () => {
  let numberOne = random(1, 10);
  let numberTwo = random(1, 10);
  const question = `${numberOne} ${numberTwo}`;
  const gameCorrectAnswer = [];

  while (numberOne !== 0 && numberTwo !== 0) {
    if (numberOne > numberTwo) {
      numberOne %= numberTwo;
    } else {
      numberTwo %= numberOne;
    }
  }
  gameCorrectAnswer.push(`${numberOne + numberTwo}`);
  const temp = gameCorrectAnswer.join('');
  return [question, temp];
};

const gcd = () => gameBase(description, game);

export default gcd;
