let arr = [23, 34, 23, 14, 34, 545, 11, 532, 23, 53];

for (let i = 0; i < arr.length; i++) {

  for (let x = 0; x < arr.length; x++) {
    if (arr[i] === arr[x] && i !== x) {
      arr.splice(x, 1);
      x--;
    }
  }
}

console.log(arr);