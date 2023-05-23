import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const game = () => {
  let numberOne = getRandomNumber(1, 10);
  let numberTwo = getRandomNumber(1, 10);
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

const runGcd = () => runGame(description, game);

export default runGcd;
