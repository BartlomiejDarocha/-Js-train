const button = document.querySelector('#button');
const container = document.querySelector('#container');
const consoleButton = document.querySelector('#console');
const rolledNumbers = [];
let printDataValue = '';
let disabled = false;
let newNumber = null;

function rollNumber() {
  const min = 1;
  const max = 8;
  return Math.floor(Math.random() * (max - min)) + min
}

function checkSameNumbers() {
  newNumber = rollNumber();
  if (rolledNumbers.some(number => newNumber === number)) {
    let rollAgain = true
    do {
      newNumber = rollNumber();
      rollAgain = rolledNumbers.some(number => newNumber === number);
    } while (rollAgain);
  };
}

function showWarningEnd() {
  return '<br> To jest 6 liczb wylosowanych';
}

function setDateLine() {
  let tempLine = ''
  rolledNumbers.forEach((number, index) => {
    tempLine += ` ${number}`;
    if (index !== 5) {
      tempLine += ','
    }
  });
  return tempLine;
}

function checkRolledNumbersLength() {
  if (disabled) {
    return;
  }
  if (rolledNumbers.length < 6) {
    checkSameNumbers();
    rolledNumbers.push(newNumber);
    printDataValue = setDateLine();
  } else {
    printDataValue += showWarningEnd();
    disabled = true;
  }
  container.innerHTML = printDataValue; 
}

button.addEventListener('click', checkRolledNumbersLength);

const user = {
  name: 'bartek',
  surname: 'darocha',
  hobbies: ['archery', 'bushcraft', 'cars']
}

function testTime(arr) {
  console.time('test')
  const newArray = arr.map((a) => {
    console.timeLog('test');
    return a * a;
  });
  console.timeEnd('test');
  return newArray;
}
function paretn() {
  function child() {
    console.trace('im here');
  }
  child();
}

consoleButton.addEventListener('click', () => {
  // console.log(console);
  // console.dir(user, 'dir');
  // console.log(user, 'log');
  // console.log('---------------');
  // console.log(document.body, 'log');
  // console.dir(document.body, 'dir różnice widać w chrome');
  // console.log('-------------');
  // user.hobbies.forEach(() => {
  //   console.count('hobbies');
  // });
  // console.log('-------------');
  // console.assert(user.name === 'Tomek', 'user.name to nie tomek');
  // console.table(user);
  // testTime([1,2,3,4]);
  // paretn();
  // console.group('main');
  //   console.log('coś 1');
  //   console.log('coś 2');
  //   console.log('coś 3');
  // console.groupEnd();

  // console.groupCollapsed('main');
  //   console.log('coś 1');
  //   console.log('coś 2');
  //   console.log('coś 3');
  // console.groupEnd();

  console.groupCollapsed('main');
    console.log('coś 1');
    console.log('coś 2');
    console.log('coś 3');
    console.groupCollapsed('sec');
      console.log('sec 1');
      console.log('sec 2');
      console.log('sec 3');
    console.groupEnd();
  console.groupEnd();
})
