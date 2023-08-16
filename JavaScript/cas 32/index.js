let randomNumber = Math.trunc(Math.random() * 20 + 1);

let input = document.querySelector('.inputNumber');
let randomNumberContainer =
  document.querySelector('.randomNumber');
let checkNumberButton =
  document.querySelector('.checkNumber');
let paragraf = document.querySelector('.massage');

// console.log(randomNumber);

let wrongGuess = 0;

checkNumberButton.addEventListener('click', () => {
  let inputValue = input.value;
  let num = randomNumber - Number(inputValue);
  if (String(num).includes('-')) num = String(num).slice(1);
  console.log(num);

  if (num < 3 && num !== 0) {
    paragraf.innerText = 'veoma blizu';
    wrongGuess++;
  } else if (num < 6 && num !== 0) {
    paragraf.innerText = 'blizu';
    wrongGuess++;
  } else if (inputValue == randomNumber) {
    paragraf.innerText = `pogodili ste broj, broj pogresnih pokusaja je ${wrongGuess}`;
    randomNumberContainer.innerText = `${randomNumber}`;
  } else if (num < 10 && num !== 0) {
    paragraf.innerText = 'Prilicno blizu';
  } else {
    paragraf.innerText = 'daleko';
  }
});

console.log(randomNumber);
