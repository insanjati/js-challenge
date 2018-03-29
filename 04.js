// call the function
isLeap(1892); // leap year
isLeap(1893); // not a leap year

// leap year rules
function isLeap(year) {
    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        console.log(year + ' is a leap year.');
    } else if (year % 4 === 0 && year % 100 !== 0) {
        console.log(year + ' is a leap year.');
    } else {
        console.log(year + ' is not a leap year.');
    }
}