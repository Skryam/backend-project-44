import commonLogic from '../index.js';
import randomNumber from '../randomNumber.js';

const isPrime = (number) => {
  let result;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = false;
      return result;
    }
  }
  result = true;
  return result;
};

const statement = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const prime = () => {
  const random = randomNumber(1, 100);
  const question = random;
  const trueAnswer = isPrime(random) ? 'yes' : 'no';
  return [question, trueAnswer];
};

export default () => commonLogic(prime, statement);
