const button = document.querySelector('#button');
const container = document.querySelector('#container'); 
const rolledNumbers = [];
let printDataValue = '';
let disabled = false;

function rollNumber() {
  const min = 1;
  const max = 3;
  return Math.floor(Math.random() * (max - min)) + min
}

function checkSameNumbers() {
  const rolledNumber = rollNumber();
  let newRoll = null; 
  if (rolledNumbers.find(number => rolledNumber === number)) {
    console.log('??/', rolledNumber);
    let rollAgain = true
    do {
      newRoll = rollNumber();
      console.log('newRoll', newRoll);
      if (newRoll !==rolledNumber) {
        rollAgain = false;
      }
    } while (rollAgain);
  }
  return newRoll ? newRoll : rolledNumber;
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
    const rollNumber = checkSameNumbers();
    rolledNumbers.push(rollNumber);
    printDataValue = setDateLine();
  } else {
    printDataValue += showWarningEnd();
    disabled = true;
  }
  container.innerHTML = printDataValue; 
}

button.addEventListener('click', checkRolledNumbersLength);
