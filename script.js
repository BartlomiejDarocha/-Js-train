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

consoleButton.addEventListener('click', () => {
  console.log(console);
})
