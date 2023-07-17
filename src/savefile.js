import readlineSync from 'readline-sync';
import name from './cli.js';

const calc = () => {
  console.log('What is the result of the expression?');
  let step = 0;
  while (step < 3) {
    const randomNumer1 = (Math.round(Math.random() * 100));
    const randomNumer2 = (Math.round(Math.random() * 100));
    const operate = ['+', '-', '*'];
    const randomOperate = Math.floor(Math.random() * (operate.length - 0.1));
    console.log(`${'Question: '}${randomNumer1} ${operate[randomOperate]} ${randomNumer2}`);
    const answer = readlineSync.question('Your answer: ');
    if (operate[randomOperate] === operate[0]) {
      if (answer === String(randomNumer1 + randomNumer2)) {
        console.log('Correct!');
        step += 1;
      } else {
        console.log(`"${answer}"${' is wrong answer ;(. Correct answer was '}"${randomNumer1 + randomNumer2}".\nLet's try again, ${name}!`);
        return;
      }
    }
    if (operate[randomOperate] === operate[1]) {
      if (answer === String(randomNumer1 - randomNumer2)) {
        console.log('Correct!');
        step += 1;
      } else {
        console.log(`"${answer}"${' is wrong answer ;(. Correct answer was '}"${randomNumer1 - randomNumer2}".\nLet's try again, ${name}!`);
        return;
      }
    }
    if (operate[randomOperate] === operate[2]) {
      if (answer === String(randomNumer1 * randomNumer2)) {
        console.log('Correct!');
        step += 1;
      } else {
        console.log(`"${answer}"${' is wrong answer ;(. Correct answer was '}"${randomNumer1 * randomNumer2}".\nLet's try again, ${name}!`);
        return;
      }
    }
  }
  console.log(`${'Congratulations, '}${name}!`);
};
export default calc();
