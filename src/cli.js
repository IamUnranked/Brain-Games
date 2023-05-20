import readlineSync from 'readline-sync';

function greeting() {
  const userName = readlineSync.question('May I have your name? ');
  return (`Hello ${userName}!`);
}

// eslint-disable-next-line import/prefer-default-export
export default greeting;
