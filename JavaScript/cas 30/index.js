let emailInput = document.querySelector('#emailInput');
let sifraInput = document.querySelector('#sifraInput');
let paragraf = document.querySelector('p');
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
  if (
    emailInput.value === 'dalilahonic' &&
    sifraInput.value === '123'
  ) {
    paragraf.innerHTML = 'Ulogovali ste se';
    console.log('ovo je dobro');
  } else {
    paragraf.innerHTML = 'email ili sifra pogresni';
    location.href = 'https://www.facebook.com/';
  }
});

// btn.addEventListener('click', () => {
//   if (
//     emailInput.value === 'dalilahonic' &&
//     sifraInput.value === '123'
//   ) {
//     alert('Uspesno ste se ulogovali');
//     localStorage.setItem('email', emailInput.value);
//     localStorage.setItem('pass', sifraInput.value);
//   } else {
//     alert('Neuspeno logovanje!');
//   }
// });

// btnDelete.addEventListener('click', () => {
//   localStorage.clear();
//   window.location.reload();
// });
