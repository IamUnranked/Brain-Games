import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const number = getRandomNumber(1, 10);
  const questionGame = `${number}`;
  let gameCorrectAnswer = '';
  if (number % 2 === 0) {
    gameCorrectAnswer = 'yes';
  } else {
    gameCorrectAnswer = 'no';
  }
  return [questionGame, gameCorrectAnswer];
};

const runEven = () => runGame(description, game);

export default runEven;
