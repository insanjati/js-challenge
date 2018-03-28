// import library of input/output
const fs = require('fs');

// store csv file into csvContent variable
let csvContent = fs.readFileSync('03.csv', 'ascii');

// separate the content per line
let csvAr = csvContent.split('\n')
csvAr.shift(); // remove first line

// turn each line into array
let csv = csvAr.map(element => {
    return element.split(',').map(x => {
        return x.trim() // remove whitespace
    })
})

// console.log(csvAr.length);
// console.log(csv);
// console.log(csv[0]);
// console.log(csv[0][2]);
// console.log(parseInt(csv[0][2], 10).toLocaleString('ja-JP', { style: 'currency', currency: 'IDR' }));

// turn array into object
let object = []
for (let i=0; i<csv.length; i++) {
    object.push(JSON.parse(JSON.stringify({ 
        name: csv[i][0],
        price: csv[i][2],
        category: csv[i][1]
    })));
}

// sort objects by price
object.sort(function (a, b) {
    return parseInt(a.price - b.price, 10);
});

// print as currency format
for (let i=0; i<csv.length; i++) {
    let rev = object[i].price.split('').reverse().join(''),
        ribuan = rev.match(/\d{1,3}/g); // find a digit using regex;
    ribuan = ribuan.join('.').split('').reverse().join('');
    object[i].price = ribuan;
    object[i].price = 'Rp ' + object[i].price;
}

// print the object
console.log(object);