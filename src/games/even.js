import commonLogic from '../index.js';
import randomNumber from '../randomNumber.js';

const statement = 'Answer "yes" if the number is even, otherwise answer "no".';
const even = () => {
  const random = randomNumber(20, 1000);
  const question = (`${'Question: '}${random}`);
  const evenNum = (random % 2 === 0) ? 'yes' : 'no';
  return [question, evenNum];
};

export default () => commonLogic(even, statement);
