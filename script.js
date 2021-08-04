const button = document.querySelector('#button');
const container = document.querySelector('#container'); 
const rolledNumbers = [];
let printDataValue = '';
let disabled = false;

function rollNumber() {
  const min = 1;
  const max = 60
  return Math.floor(Math.random() * (max - min)) + min
}

function showWarningEnd() {
  return '<br> To jest 6 liczb wylosowanych';
}

function setDateLine() {
  let tempLine = ''
  rolledNumbers.forEach((number, index) => {
    tempLine += ` ${number}`;
    if ((index + 1) !== rolledNumbers.length) {
      tempLine += `,`;
    }
  });
  return tempLine;
}

function checkRolledNumbers() {
  if (disabled) {
    return;
  }
  if (rolledNumbers.length < 6) {
    rolledNumbers.push(rollNumber());
    printDataValue = setDateLine();
  } else {
    printDataValue += showWarningEnd();
    disabled = true;
  }
  container.innerHTML = printDataValue; 
}

button.addEventListener('click', checkRolledNumbers);
