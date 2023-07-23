import commonLogic from '../index.js';
import randomNumber from '../randomNumber.js';

const findGCD = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num2) {
    const t = num2;
    num2 = num1 % num2;
    num1 = t;
  }
  return num1;
};

const statement = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const randomNumber1 = randomNumber(1, 100);
  const randomNumber2 = randomNumber(1, 100);
  const question = (`${randomNumber1} ${randomNumber2}`);
  const trueAnswer = String(findGCD(randomNumber1, randomNumber2));
  return [question, trueAnswer];
};

export default () => commonLogic(gcd, statement);
