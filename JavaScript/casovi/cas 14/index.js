const prviNiz = [6, 7, 9, 3, 13, 5, 32, 1, 8];
const drugiNiz = []

for(let i = 0; i < prviNiz.length; i++) {
    if(prviNiz[i] % 2 ===0) {
        drugiNiz.push(prviNiz[i])
    }
}

console.log(drugiNiz);

//................

const treci = [];

for(let i = 0; i < prviNiz.length; i++) {
    treci.push(prviNiz[i] * 3)
}

console.log(treci);

//....................

let noviNiz = []

for (let i = 0; i < treci.length; i++) {
    if(treci[i] > 20 && treci[i] < 30) {
        noviNiz.push((treci[i] * 8) / 4)
    } else if(treci[i] > 20) {
        noviNiz.push(treci[i] *4)
    }
}

console.log(noviNiz);

let nekaMatrica = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let novaMatrica = []

for(let i = 0; i < nekaMatrica.length; i++) {
    noviRed = [];

    for(let x = 0; x < nekaMatrica[i].length; x++) {
        if(nekaMatrica[i][x] % 2 === 0) {
            noviRed.push(nekaMatrica[i][x])
        }
        novaMatrica.push(noviRed)
    }
}
console.log(novaMatrica);

//........

