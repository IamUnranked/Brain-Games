import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getTask = () => {
  const number = getRandomNumber(1, 10);
  const gameQuestion = `${number}`;
  let correctAnswer = '';
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [gameQuestion, correctAnswer];
};

const runEven = () => runGame(description, getTask);

export default runEven;
