import readlineSync from 'readline-sync';
import name from './cli.js';

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let step = 0;
  while (step < 3) {
    const random = (Math.round(Math.random() * 1000));
    console.log(`${'Question: '}${random}`);
    if (random % 2 === 0) {
      const answer = readlineSync.question('Your answer: ');
      if (answer === 'yes') {
        console.log('Correct!');
        step += 1;
      } else {
        console.log(`"${answer}"${' is wrong answer ;(. Correct answer was "yes".\nLet\'s try again, '}${name}!`);
        return;
      }
    } else if (random % 2 !== 0) {
      const answer = readlineSync.question('Your answer: ');
      if (answer === 'no') {
        console.log('Correct!');
        step += 1;
      } else {
        console.log(`"${answer}"${' is wrong answer ;(. Correct answer was "no".\nLet\'s try again, '}${name}!`);
        return;
      }
    }
  }
  console.log(`${'Congratulations, '}${name}!`);
};
export default even();
