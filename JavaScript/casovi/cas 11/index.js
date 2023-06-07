let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let unos = Number(prompt('unesite broj'));

let currentPage = [];

let startIndex = (unos - 1) * 3;

    if (unos) {
        currentPage = arr.slice(startIndex, startIndex + 3);
    } else {
        currentPage = 'stranica ne postoji';
    }

console.log(currentPage);

//..
let ang1 = 'listen';
let ang2 = 'silent';

let ang1test = ang1.split('').sort().join('');
let ang2test = ang2.split('').sort().join('');

if(ang1test === ang2test) {
    console.log('rec je anagram');
} else {
    console.log('rec nije anagram');
}