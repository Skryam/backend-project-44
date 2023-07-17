import readlineSync from 'readline-sync';

const sayMyName = () => {
  console.log('Welcome to the Brain Games!');
  const who = readlineSync.question('May I have your name? ');
  console.log(`${'Hello, '}${who}${'!'}`);
  return who;
};

const commonLogic = (game, statement) => {
  const [name] = sayMyName();
  let step = 0;
  const roundsCount = 3;
  console.log(statement);
  while (step < roundsCount) {
    const [question, trueAnswer] = game();
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

export default commonLogic;
