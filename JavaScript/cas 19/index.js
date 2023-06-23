const novi = [100, 250, 100, 32, 34, 100, 234, 324];
const srotArr = novi.sort((a, b) => b - a);

for (let i = 0; i < 3; i++) {
  console.log(srotArr[i]);
  srotArr[i] = srotArr[i] - 10;
}

console.log(srotArr, 'fin');

//........................

const domaci = [
    [100, 23, 240, 45],
    [23, 2315, 151, 232],
    [232, 121, 50],
    ];
    // u  datom arr unutura njega imate nizove sa produktima za svaki uzeti top 2 najskuplja i umanjiti im cenu za 20;

    let sortArr = []

    for(let i = 0; i < domaci.length; i++) {
      let noviArray = []; 
      for(let x = 0; x < domaci[i].length; x++) {
        noviArray.push(domaci[i].sort((a,b) => b-a)[x])
      }
      sortArr.push(noviArray)
    }

    console.log(sortArr);

    for(let i = 0; i < domaci.length; i++) {
      for (let x = 0; x <= 1; x++) {
        sortArr[i][x] += 10;
      }
    }

    console.log(sortArr);
  
    //.............................................

  