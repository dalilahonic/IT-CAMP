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


