import logic from '../src/index.js';

const trueAnswer = (randomNumer1, randomNumer2) => {
  let divisor = 1;
  let result = 1;
  while (divisor < randomNumer1) {
    if ((randomNumer1 % result === 0) && (randomNumer2 % result === 0)) {
      divisor += 1;
      if ((randomNumer1 % divisor === 0) && (randomNumer2 % divisor === 0)) {
        result = divisor;
      }
    }
  }
  return String(result);
};

const gcd = () => {
  const randomNumer1 = (Math.round(Math.random() * 100));
  const randomNumer2 = (Math.round(Math.random() * 100));
  const statement = 'Find the greatest common divisor of given numbers.';
  const question = (`${'Question: '}${randomNumer1} ${randomNumer2}`);
  return [statement, question, trueAnswer(randomNumer1, randomNumer2)];
};

export default logic(gcd);
