for(let i = 0; i < 100; i++) {
    
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} je deljiv sa 3 i sa 5`)
    } else if (i % 3 === 0 ) {
        console.log(`${i} je deljiv sa 3`)
    } else if (i % 5 === 0) {
        console.log(`${i} je deljiv sa 5`)
    } else {
        console.log(`${i} nij deljiv`)
    }
}

niz = [];

for(let i = 0; i <= 10; i++) {
    let nesto = niz[i] = i + ' ' + 'test';
    console.log(nesto)
}

let testNiz = [1, 2, '21', '232',true, false ]

for(let i = 0; i < testNiz.length; i++) {
    testNiz[i];

    if(typeof(testNiz[i]) === 'string') {
        console.log(` ${testNiz[i]} je string`)
    } else if(typeof(testNiz[i]) === 'number') {
        console.log(` ${testNiz[i]} je number`)
    } else if (testNiz[i]) {
        console.log(` ${testNiz[i]} je true`)
}  else if (!testNiz[i]) {
    console.log(` ${testNiz[i]} je false`)
} 
}


