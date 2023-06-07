function polindrom(rec) {
  let drugaRec = '';
  for (let i = rec.length - 1; i >= rec.length / 2 - 0.5; i--) {
    drugaRec += rec[i];
  }

  if (
    rec.length % 2 === 0 &&
    rec.slice(rec.length / 2) === rec.slice(0, rec.length / 2)
  ) {
    console.log(rec + ' je polindrom');
  } else if (
    rec.length % 2 !== 0 &&
    rec.slice(0, rec.length / 2 + 0.5) === drugaRec
  ) {
    console.log(rec + ' je polindrom');
  } else {
    console.log(rec + ' nije polindrom');
  }
}

polindrom('tata');
polindrom('potop');
polindrom('oko');
polindrom('nesto');
polindrom('melem');

//.........
// let varijabla = 'melem';
// console.log(varijabla[2]); //e