const string = 'ibu ratna bilang halo';

// push each word into array
let splitWord = string.split(' ');

// push each char into array
let splitString = string.split('');

// reverse per word
function reverseWord(string) {
    let reverseWord = splitWord.reverse();
    let joinWord = reverseWord.join(' ');
    return joinWord;
}

// reverse per word and char
function reverseChar(string) {
    let reverseString = splitString.reverse();
    let joinString = reverseString.join('');
    return joinString;
}

// print to console
console.log(splitWord);
console.log(reverseWord(string));
console.log(reverseChar(string));