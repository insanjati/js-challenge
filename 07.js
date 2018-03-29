class Str {
    constructor(string) {
        this._string = string;
    }
    lower(string) {
        this._string = string;
        return this._string.toLowerCase();
    }
    upper(string) {
        this._string = string;
        return this._string.toUpperCase();
    }
    capitalize(string) {
        this._string = string;
        return this._string.replace(/\b\w/g, l => l.toUpperCase());
    }
    reverse(string) {
        this._string = string;
        let splitString = string.split('');
        let reverseString = splitString.reverse();
        let joinString = reverseString.join('');
        return joinString;
    }        
    contains(string, substring) {
        this._string = string;

        let sub = [];
        if (typeof substring !== 'object') {
            sub = substring.split(' ');
        } else {
            Array.prototype.push.apply(sub, substring);
        }
        return sub.some(el => this._string.includes(el));
    }
    random(number) {
        let alphanum = '',
            iterate = Math.floor(number / 11),
            remain = number % 11,
            full = Math.random().toString(36).substr(2, 11);
        if (number === undefined) {
            alphanum = full + Math.random().toString(36).substr(2, 5);
        } else if (number > 11) {
            for (let i=0; i<iterate; i++) {
                alphanum += full;
            }
            alphanum += Math.random().toString(36).substr(2, remain);
        } else {
            alphanum = Math.random().toString(36).substr(2, remain);
        }
        return alphanum;
    }
    slug(string) {
        this._string = string;
        let lowcase = this._string.toLowerCase();
        lowcase = lowcase.replace(/[&?]/gi, '');
        lowcase = lowcase.replace(/[^0-9a-z]/gi, '-');
        console.log(lowcase);
    }
}

const myString = new Str();
console.log(myString.lower('MAKAN'));
console.log(myString.upper('makan'));
console.log(myString.capitalize('saya ingin makan'));
console.log(myString.reverse('kasur'));
console.log(myString.contains('Saya ingin makan sate', 'makan'));
console.log(myString.contains('Saya ingin makan sate', 'rujak'));
console.log(myString.contains('Saya ingin makan sate', ['sate', 'rujak']));
console.log(myString.random());
console.log(myString.random(6));
console.log(myString.random(36));
console.log(myString.slug('Kotlin & Swift semakin populer di 2018?'))