import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

// eslint-disable-next-line consistent-return
const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getTask = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const operator = operators[getRandomNumber(0, 2)];
  const gameQuestion = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();

  return [gameQuestion, correctAnswer];
};

const runCalc = () => runGame(description, getTask);

export default runCalc;
