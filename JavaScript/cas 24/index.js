class Banka {
  constructor(imeBanke, racuni) {
    this.imeBanke = imeBanke;
    this.racuni = [];
  }

  kreirajRacun(imeVlasnika, brojRacuna, stanjeNaRacunu) {
    const racun = {
      imeVlasnika: imeVlasnika,
      brojRacuna: brojRacuna,
      stanjeNaRacunu: stanjeNaRacunu,
    };
    this.racuni.push(racun);
    return this.racuni;
  }

  ukupnoStanje() {
    let sum = 0;
    for (let racun of this.racuni) {
      sum += racun.stanjeNaRacunu;
    }
    return sum;
  }

  proveriRacun(brojRacuna) {
    for (let racun of this.racuni) {
      return racun.brojRacuna === brojRacuna
        ? `${racun.imeVlasnika} ${racun.stanjeNaRacunu}`
        : 'broj racuna ne postoji';
    }
  }

  uplati(brojRacuna, iznosKojiSeUplacuje) {
    for (let racun of this.racuni) {
      return racun.brojRacuna === brojRacuna
        ? (racun.stanjeNaRacunu += iznosKojiSeUplacuje)
        : 'racun ne postoji';
    }
  }

  isplati(brojRacuna, iznosKojiSeIsplacuje) {
    for (let racun of this.racuni) {
      if (
        racun.brojRacuna === brojRacuna &&
        racun.stanjeNaRacunu >= iznosKojiSeIsplacuje
      )
        return (racun.stanjeNaRacunu -=
          iznosKojiSeIsplacuje);
      else return 'racun ne postoji';
    }
  }
}

const banka1 = new Banka('ime Banke');
console.log(banka1);
console.log(banka1.kreirajRacun('Dalila', 234, 20));
console.log(banka1.kreirajRacun('Neko', 432324, 30));
console.log('.......');
console.log(banka1.ukupnoStanje());
console.log(banka1.proveriRacun(234));
console.log(banka1.uplati(234, 20));
console.log(banka1.isplati(234, 10));

//...............................+

const testNasegZnanja =[
  {ime: 'Dzelal', prezime: 'Dupjlak', godine: 23 },
  {ime: 'Dalila', prezime: 'Honic', godine: 16 }
]

for(obj of testNasegZnanja) {
  for(let [key, value] of Object.entries(obj)) {
    if(key === 'godine' && value >= 18) {
      obj.punoletan = true;
    }  else if(key === 'godine' && value < 18) {
      obj.punoletan = false
    }
  }
}

console.log(testNasegZnanja);