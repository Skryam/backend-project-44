import logic from '../src/index.js';

const even = () => {
  const statement = 'Answer "yes" if the number is even, otherwise answer "no".';
  const random = Math.round(Math.random() * 1000);
  const question = (`${'Question: '}${random}`);
  const trueAnswer = (random % 2 === 0) ? 'yes' : 'no';
  return [statement, question, trueAnswer];
};

export default logic(even);
