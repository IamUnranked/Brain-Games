import gameBase from '../index.js';
import random from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const number = random(1, 10);
  const questionGame = `${number}`;
  let gameCorrectAnswer = '';
  if (number % 2 === 0) {
    gameCorrectAnswer = 'yes';
  } else {
    gameCorrectAnswer = 'no';
  }
  return [questionGame, gameCorrectAnswer];
};

const even = () => gameBase(description, game);

export default even;
