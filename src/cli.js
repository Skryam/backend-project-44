import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const who = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${who}!`);
  return who;
};
export default getName;
