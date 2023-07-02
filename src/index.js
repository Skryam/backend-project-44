import readlineSync from 'readline-sync';
import name from './cli.js';

const logic = (game) => {
  let step = 0;
  const [statement] = game();
  console.log(statement);
  while (step < 3) {
    const [, question, trueAnswer] = game();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      console.log('Correct!');
      step += 1;
    } else {
      console.log(`"${answer}"${' is wrong answer ;(. Correct answer was '}"${trueAnswer}".\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`${'Congratulations, '}${name}!`);
};

export default logic;
