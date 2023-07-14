class Prodavnica {
  constructor(naziv, lokacija, proizvodi) {
    this.naziv = naziv;
    this.lokacija = lokacija;
    this.proizvodi = proizvodi;
  }

  dodajProizvod(ime, cena, kolicina) {
    const proizvod = {
      ime: ime,
      cena: cena,
      kolicina: kolicina,
    };
    this.proizvodi.push(proizvod);
  }

  ukloniProizvod(ime) {
    for (let obj of this.proizvodi) {
      for (let value of Object.values(obj)) {
        if (value === ime) {
          let indexOf = this.proizvodi.indexOf(obj);
          this.proizvodi.splice(indexOf, 1);
        }
      }
    }
  }

  pretraziProizvode(minCena, maxCena) {
    let ceneProizvoda = [];

    for (let obj of this.proizvodi) {
      for (let [key, value] of Object.entries(obj)) {
        if (
          key === 'cena' &&
          value >= minCena &&
          value < maxCena
        ) {
          ceneProizvoda.push(obj);
        }
      }
    }
    return ceneProizvoda;
  }

  ukupnaVrednostProizvoda() {
    let sum = 0;
    for (let obj of this.proizvodi) {
      let kolicina = obj.kolicina;
      let cena = obj.cena;
      sum += cena * kolicina;
    }
    return sum;
  }
}

// let arr = [1,2,3,4,5,6];
// console.log(arr.splice(2,3));
// console.log(arr);

const prodavnica1 = new Prodavnica(
  'Maxi',
  'Novi Pazar',
  []
);

prodavnica1.dodajProizvod('hleb', 70, 3);
prodavnica1.dodajProizvod('nekiProzivod', 200, 2);
console.log(prodavnica1);
prodavnica1.ukloniProizvod('hleb');
console.log(prodavnica1);

prodavnica1.dodajProizvod('hleb', 70, 3);
prodavnica1.dodajProizvod('taj', 670, 10);
// console.log(prodavnica1);

console.log(prodavnica1.pretraziProizvode(60, 210));
// console.log(prodavnica1);
console.log(prodavnica1.ukupnaVrednostProizvoda());
