import gameBase from "../src/index.js";
import random from "../src/utils.js"

const description = 'What number is missing in the progression?';

const game = () => {
  const start = random(1, 10);
  const step = random(1, 5);
  const length = random(5, 20);
  const result = [];

  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }
  const randomReplace = result[random(1, result.length - 1)];
  const question = result.join(' ').replace(randomReplace, '..');
  const correctAnswer = randomReplace.toString();
  return [question, correctAnswer];
};

const progression = () => gameBase(description, game);

export default progression;