let newArr = [32, 45, 74, 11, 22, 543];

const priceUp = newArr.map((price) => price + 1);

const priceUp2 = newArr.map((price) => {
  if (price > 10) {
    return price + 1;
  } else return price;
});

const noviArr = [true, false, [1, 2, 3, 4, 5], 'string', 2, 33, 4, 'string2'];

booleanNiz = [];
stringNiz = [];
numNiz = [];
objectNiz = [];

for (let i = 0; i < noviArr.length; i++) {
  if (typeof noviArr[i] === 'boolean') {
    booleanNiz.push(noviArr[i]);
  } else if (typeof noviArr[i] === 'string') {
    stringNiz.push(noviArr[i]);
  } else if (typeof noviArr[i] === 'number') {
    numNiz.push(noviArr[i]);
  } else {
    objectNiz.push(noviArr[i]);
  }
}

console.log(typeof noviArr[0]);

console.log(booleanNiz);
console.log(stringNiz);
console.log(numNiz);
console.log(objectNiz);

const arr = [
  [10, 20, 30, 40, 50],
  [23, 12, 53, 43, 53],
];

let prviNiz = 0;
let drugiNiz = 0;
  for (let i = 0; i < arr[0].length; i++) {
    prviNiz += arr[0][i];
    drugiNiz += arr[1][i];
  }

console.log(prviNiz);
console.log(drugiNiz);

if (prviNiz > drugiNiz) {
  console.log('prvi niz je veci od drugog');
} else if (prviNiz < drugiNiz) {
  console.log('drugi niz je veci od prvog');
} else {
  console.log('jednaki su');
}


