import readlineSync from 'readline-sync';

const name = () => {
    console.log('Welcome to the Brain Games!');
    const who = readlineSync.question('May I have your name? ');
    console.log(`${'Hello, '}${who}${'!'}`);
}
export default name();