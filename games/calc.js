import logic from '../src/index.js';

const arr = ['+', '-', '*'];
const randomOperate = Math.floor(Math.random() * (arr.length - 0.1));

const trueAnswer = (randomNumer1, randomNumer2) => {
  if (arr[randomOperate] === arr[0]) {
    return String(randomNumer1 + randomNumer2);
  }
  if (arr[randomOperate] === arr[1]) {
    return String(randomNumer1 - randomNumer2);
  } if (arr[randomOperate] === arr[2]) {
    return String(randomNumer1 * randomNumer2);
  }
  return trueAnswer;
};

const calc = () => {
  const randomNumer1 = (Math.round(Math.random() * 100));
  const randomNumer2 = (Math.round(Math.random() * 100));
  const statement = 'What is the result of the expression?';
  const question = (`${'Question: '}${randomNumer1} ${arr[randomOperate]} ${randomNumer2}`);
  return [statement, question, trueAnswer(randomNumer1, randomNumer2)];
};

export default logic(calc);
