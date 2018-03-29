let allEvens = [], allOdds = [], byFive = [], allPrimes = [];

for (let i=0; i<=100; i++) {
    // push even numbers into isEven array
    if (i % 2 === 0) {
        allEvens.push(i);
    }
    // push odd numbers into isOdd array
    if (i % 2 !== 0) {
        allOdds.push(i);
    }
    // push multiplies of 5 numbers into byFive array
    if (i !== 0 && i % 5 === 0) {
        byFive.push(i);
    }
}

// push prime numbers into isPrime array
let filter = [];
for (i = 2; i <= 100; ++i) {
    if (!filter[i]) {
        allPrimes.push(i);
        for (j = i << 1; j <= 100; j += i) { // bitwise operator shift left
            filter[j] = true;
        }
    }
}

// print to console
console.log('Group of even numbers: ' + allEvens.join(', '));
console.log('Group of odd numbers: ' + allOdds.join(', '));
console.log('Group of numbers multiplies by 5: ' + byFive.join(', '));
console.log('Group of prime numbers: ' + allPrimes.join(', '));