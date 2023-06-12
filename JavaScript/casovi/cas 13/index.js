const matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrica.length; i++) {
  for (let x = 0; x < matrica[i].length; x++) {
    if (matrica[i][x] % 2 === 0) {
      console.log(matrica[i][x], 'je paran');
    } else {
      console.log(matrica[i][x], 'je  neparan');
    }
  }
}

//.....................................

let recenica = 'Mama ima Momu';

let broj = 0;

for(let i = 0; i< recenica.length; i++) {
    if(recenica[i].toUpperCase() === 'M') {
        broj++;
    }
}

console.log(broj);

const words = ['rec', 'telefon', 'laptop', 'fakultet', 'ispit', 'zub', 'casa', 'noga', 'patika'];
const words2 = [];

for(let i = 0; i < words.length; i++) {
   if(words[i][1] === 'a') {
    words2.push(words[i]);
   }
}

console.log(words2);

//.................................

let nekaRecenica = 'Flasa je Providna I IMA MAXI logo';

let brojac = 0;

for(let i = 0; i < nekaRecenica.length; i++) {
    if(nekaRecenica[i] === nekaRecenica[i].toLowerCase() && nekaRecenica[i] !== ' ') {
        brojac++;
    }
}

console.log('broj malih slova je ', brojac);