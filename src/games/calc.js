import commonLogic from '../index.js';
import randomNumber from '../randomNumber.js';

const operators = ['+', '-', '*'];
const statement = 'What is the result of the expression?';

const calculate = (randomNumber1, randomNumber2, operator) => {
  switch (operator) {
    case '+':
      return (randomNumber1 + randomNumber2);
    case '-':
      return (randomNumber1 - randomNumber2);
    case '*':
      return (randomNumber1 * randomNumber2);
    default:
      throw new Error('this operator is not supported');
  }
};

const calc = () => {
  const randomOperatorIndex = randomNumber(0, 2);
  const randomNumber1 = randomNumber(1, 100);
  const randomNumber2 = randomNumber(1, 100);
  const operator = operators[randomOperatorIndex];
  const question = (`${'Question: '}${randomNumber1} ${operator} ${randomNumber2}`);
  const trueAnswer = String(calculate(randomNumber1, randomNumber2, operator));
  return [question, trueAnswer];
};

export default () => commonLogic(calc, statement);
