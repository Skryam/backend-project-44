import commonLogic from '../index.js';
import randomNumber from '../randomNumber.js';

const isEven = (number) => {
  let result;
  if (number % 2 === 0) {
    result = true;
  }
  return result;
};

const statement = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEven = () => {
  const random = randomNumber(20, 1000);
  const question = random;
  const trueAnswer = isEven(random) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => commonLogic(getEven, statement);
