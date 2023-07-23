import commonLogic from '../index.js';
import randomNumber from '../randomNumber.js';

const trueAnswer = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const statement = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  const random = randomNumber(20, 1000);
  const question = random;
  return [question, trueAnswer(random)];
};

export default () => commonLogic(even, statement);
