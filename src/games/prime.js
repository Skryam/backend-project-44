import commonLogic from '../index.js';
import randomNumber from '../randomNumber.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const statement = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const getPrime = () => {
  const random = randomNumber(1, 100);
  const question = random;
  const trueAnswer = isPrime(random) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => commonLogic(getPrime, statement);
