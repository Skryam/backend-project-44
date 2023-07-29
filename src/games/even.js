import commonLogic from '../index.js';
import randomNumber from '../randomNumber.js';

const isEven = (number) => number % 2 === 0;

const statement = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEven = () => {
  const random = randomNumber(20, 1000);
  const question = random;
  const trueAnswer = isEven(random) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => commonLogic(getEven, statement);
