let nekiArr = [10, 3, 2, 5, 4, 7, 8, 9];

let najveciBroj;
for (let i = 0; i < nekiArr.length; i++) {
  for (let x = 0; x < nekiArr.length; x++) {
    if (nekiArr[i] > nekiArr[x] && x !== i) {
      najveciBroj = nekiArr[i];
    }
  }
}

console.log(najveciBroj);

nekiArr.forEach((el, index) => {
  nekiArr[index] = el + 1;
});

console.log(nekiArr);

nekiArr.forEach((el, index) => {
  if (nekiArr[index] % 2 === 0) {
    nekiArr[index] = el + 2;
  } else if (nekiArr[index] % 2 !== 0) {
    nekiArr[index] = el + 2;
  }
});

console.log(nekiArr);

let nekiDrugi = [1, 2, 3, 4, 5, 6];

let newArr = nekiDrugi.map((el) => {
  if (el % 2 === 0) {
    return (el = el + 2);
  } else {
    return (el = el - 1);
  }
});

console.log(newArr);