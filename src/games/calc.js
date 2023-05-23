import runGame from '../index.js';
import getRandomNumber from '../utils.js';

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
  const numberOne = getRandomNumber(1, 10);
  const numberTwo = getRandomNumber(1, 10);
  const operator = ['+', '-', '*'];
  const operators = operator[getRandomNumber(0, operator.length - 1)];
  const questionGame = `${numberOne} ${operators} ${numberTwo}`;
  const gameCorrectAnswer = calculator(numberOne, numberTwo, operators).toString();

  return [questionGame, gameCorrectAnswer];
};

const runCalc = () => runGame(description, game);

export default runCalc;
