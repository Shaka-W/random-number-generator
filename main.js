const minimum = document.querySelector('#minimum');
const maximum = document.querySelector('#maximum');
const btnSubmit = document.querySelector('.btn-submit');
const numberOutput = document.querySelector('.number-output');

btnSubmit.addEventListener('click', generateRandomNumber);

function generateRandomNumber(e) {
    e.preventDefault();

   let minimumValue = Number(minimum.value);
   let maximumValue = Number(maximum.value);
   let randomNumber = Math.floor(Math.random() * (maximumValue - minimumValue + 1)) + minimumValue;
   
   numberOutput.textContent = randomNumber;
}