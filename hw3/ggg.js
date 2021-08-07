let arr = [];

for (let i = 0; i < 5; i++) {
    let value = prompt('Enter a few values', '');
    arr.push(value);
}

let arrSum = arr.reduce(function (sum, i) {
    if (!isNaN(i)) {
        return sum + Number(i);
    } else {
        return sum + 0;
    }
}, 0 );

console.log(arrSum);