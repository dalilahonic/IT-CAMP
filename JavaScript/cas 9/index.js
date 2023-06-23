const nekiNiz = [3, 7, 5, 10, 4, 9 , 8 , 2];

for(let i = 0; i < nekiNiz.length; i++) {
    if(nekiNiz[i] % 2 === 0) {
        console.log( `${nekiNiz[i]} je paran`);
    } else {
        console.log(`${nekiNiz[i]} je neparan`);
    }
}