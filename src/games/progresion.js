import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getTask = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(5, 20);
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }
  const randomReplace = result[getRandomNumber(1, result.length - 1)];
  const gameQuestion = result.join(' ').replace(randomReplace, '..');
  const correctAnswer = randomReplace.toString();
  return [gameQuestion, correctAnswer];
};

const runProgression = () => runGame(description, getTask);

export default runProgression;
