import commonLogic from '../index.js';

const primeNum = () => {
  const randomNumer = (Math.round(Math.random() * 100));
  for (let i = 2; i < randomNumer; i += 1) {
    if (randomNumer % i === 0) {
      const trueAnswer = 'no';
      return [randomNumer, trueAnswer];
    }
  }
  const trueAnswer = 'yes';
  return [randomNumer, trueAnswer];
};

const prime = () => {
  const [randomNumer, trueAnswer] = primeNum();
  const statement = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const question = (`${'Question: '}${randomNumer}`);
  return [statement, question, trueAnswer];
};

export default () => commonLogic(prime);
