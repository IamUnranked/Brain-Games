import runGame from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getTask = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(5, 20);
  const progression = getProgression(start, step, length);

  const hiddenNumber = getRandomIndex(progression);
  const correctAnswer = (progression[hiddenNumber]).toString();
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const runProgression = () => runGame(description, getTask);

export default runProgression;
