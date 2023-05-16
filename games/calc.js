import gameBase from '../src/index.js';

const description = 'What is the result of the expression?';

const calculator = (firstValue, secondValue, operator) => {
  let result = null;

  switch (operator) {
    case '+':
      result = firstValue + secondValue;
      break;
    case '-':
      result = firstValue - secondValue;
      break;
    case '*':
      result = firstValue * secondValue;
      break;
    default:
  }
  return result;
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numberOne = random(1, 10);
const numberTwo = random(1, 10);
const operator = ['+', '-', '*'];
const operators = operator[random(0, operator.length - 1)];

const game = () => {
  const questionGame = `Question: ${numberOne} ${operators} ${numberTwo}`;
  const gameCorrectAnswer = calculator(numberOne, numberTwo, operator).toString();

  return [questionGame, gameCorrectAnswer];
};

const calc = () => gameBase(description, game);

export default calc;
