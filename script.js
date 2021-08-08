const button = document.querySelector('#button');
const container = document.querySelector('#container'); 
const rolledNumbers = [];
let printDataValue = '';
let disabled = false;

function rollNumber() {
  const min = 1;
  const max = 7;
  return Math.floor(Math.random() * (max - min)) + min
}


function checkSameNumbers() {
  const rolledNumber = rollNumber(); 
  if (rolledNumbers.some(number => rolledNumber === number)) {}
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
    rolledNumbers.push(newNumber);
    printDataValue = setDateLine();
  } else {
    printDataValue += showWarningEnd();
    disabled = true;
  }
  container.innerHTML = printDataValue; 
}

button.addEventListener('click', checkRolledNumbersLength);
