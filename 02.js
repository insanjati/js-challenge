const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']

// combine into single array 
let all = first.concat(second, third);

// combine into readable sentence
let allString = all.join(' ');

// print to console
console.log(all);
console.log(allString);