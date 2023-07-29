import commonLogic from '../index.js';
import randomNumber from '../randomNumber.js';

const buildProgression = () => {
  let min = randomNumber(1, 80);
  const arrayLength = randomNumber(5, 15);
  const step = randomNumber(3, 60);
  const progressionArray = [];
  let acc = 0;
  while (acc < arrayLength) {
    progressionArray.push(min);
    min += step;
    acc += 1;
  }
  const randomIndex = randomNumber(0, (progressionArray.length) - 1);
  const hiddenElement = (progressionArray[randomIndex]);
  progressionArray[randomIndex] = '..';
  const progression = progressionArray.join(' ');
  return [progression, hiddenElement];
};

const statement = 'What number is missing in the progression?';

const getProgressionGame = () => {
  const [progression, hiddenElement] = buildProgression();
  const question = progression;
  const trueAnswer = String(hiddenElement);
  return [question, trueAnswer];
};

export default () => commonLogic(getProgressionGame, statement);
