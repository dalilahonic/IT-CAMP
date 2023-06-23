let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
        arr[i] += 2
    }
}

console.log(arr);

//................

let array = [23, 34, 23, 14, 34, 545, 11, 532, 23, 53];

for (let i = 0; i < array.length; i++) {

  for (let x = 0; x < array.length; x++) {
    if (array[i] === array[x] && i !== x) {
      array.splice(x, 1);
      x--;
    }
  }
}

console.log(array);

//................................................

function myFunction(num) {
    if(num % 3 === 0 && num % 5 === 0) {
        console.log(`${num} je deljiv sa 3 i sa 5`)
    } else if(num % 3 === 0) {
        console.log(`${num} je deljiv sa 3`)
    } else if(num % 5 === 0) {
        console.log(`${num} je deljiv sa 5`)
    }
}

myFunction(20);

//...

function function2(broj) {
    let divisibleBy = [];

    for (let i = 1; i <= 9; i++) {
        if (broj % i === 0) {
            divisibleBy.push(i);
        }
    }

    if (divisibleBy.length > 0) {
        console.log(`${broj} je deljiv sa ${divisibleBy.join(', ')}`);
    }
}

function2(9);