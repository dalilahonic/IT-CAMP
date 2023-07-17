function totalAmountVisible(topNum, numOfSides) {
  let numOnTheBottom = numOfSides + 1 - topNum;

  let sum = 0;
  // sum = (numOfSides / 2) * (1 + numOfSides) - numOnTheBottom
  for (let i = 1; i <= numOfSides; i++) {
    if (i !== numOnTheBottom) sum += i;
  }

  return sum;
}

// console.log(totalAmountVisible(3, 6));

//.......................................

const ja = {
  ime: 'Dalila',
  prezime: 'Honic',
  godiste: 2005,
  godine() {
    return 2023 - this.godiste;
  }
};

function mojaFunkcija(skola) {
  console.log(
    `Moje ime je ${this.ime}, prezime ${this.prezime} i imam ${this.godine()} godina i skola je ${skola}`
  );
}

mojaFunkcija.call(ja, 'nema');
const novaFunkcija = mojaFunkcija.bind(ja);

novaFunkcija('nema');
// console.log(ja);
