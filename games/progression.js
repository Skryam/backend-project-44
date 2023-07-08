import logic from '../src/index.js';

const progress = () => {
  const min = (Math.ceil(Math.random() * 30));
  const max = (Math.ceil(Math.random() * (130 - min) + min));
  const step = Math.ceil((max - min) / 10);
  const fin = Array.from({ length: 10 }, (v, i) => (i * step) + max);
  const randomIndex = Math.floor(Math.random() * fin.length);
  const trueAnswer = String(fin[randomIndex]);
  fin[randomIndex] = '..';
  const arr = fin.join(' ');
  return [arr, trueAnswer];
};

const progression = () => {
  const [arr, trueAnswer] = progress();
  const statement = 'What number is missing in the progression?';
  const question = (`${'Question: '}${arr}`);
  return [statement, question, trueAnswer];
};

export default logic(progression);
