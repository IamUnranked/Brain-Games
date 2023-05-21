import gameBase from '../src/index.js';
import random from '../src/utils.js';

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

const game = () => {
  const numberOne = random(1, 10);
  const numberTwo = random(1, 10);
  const operator = ['+', '-', '*'];
  const operators = operator[random(0, operator.length - 1)];
  const questionGame = `${numberOne} ${operators} ${numberTwo}`;
  const gameCorrectAnswer = calculator(numberOne, numberTwo, operators).toString();

  return [questionGame, gameCorrectAnswer];
};

const calc = () => gameBase(description, game);

export default calc;
