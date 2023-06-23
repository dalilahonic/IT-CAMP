let fullArr = ['ahmed', 'davud', false, 'honic', 'buhic', 'eldar', 2];

for (let i = 0; i < fullArr.length; i++) {
  if (typeof fullArr[i] !== 'string') {
    fullArr.splice(i, 1);
  }
}

console.log(fullArr);

//.........

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
target = 10;
for (let i = 0; i < arr.length; i++) {
  for (let x = 0; x < arr.length; x++) {
    if (arr[i] + arr[x] === target && i !== x) {
      console.log('brojevi su', arr[x], arr[i]);
    }
  }
}

//............

let noviArr = ['amar', 'jasmin', 'dzelal', 'adis', 'dalila'];
let prviDeo = []
let drugiDeo = [];
let najnovijiNiz = [];

for (let i = 0; i < noviArr.length; i++) {
  prviDeo.push(noviArr[i].slice(0, 1).toUpperCase());
  drugiDeo.push(noviArr[i].slice(1));
  najnovijiNiz.push(prviDeo[i] + drugiDeo[i]);
}

console.log(prviDeo);
console.log(drugiDeo);
console.log(najnovijiNiz);