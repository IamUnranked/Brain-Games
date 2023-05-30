import runGame from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }
  return result;
};

const getTask = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(5, 20);
  const progression = getProgression(start, step, length);
  const randomReplace = progression[getRandomIndex(progression)];
  const question = progression.join(' ').replace(randomReplace, '..');
  const correctAnswer = randomReplace.toString();
  return [question, correctAnswer];
};

const runProgression = () => runGame(description, getTask);

export default runProgression;
