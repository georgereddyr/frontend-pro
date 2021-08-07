let sum, symbols, emptyArr = [];

while (!(symbols === null)) {
    symbols = prompt('Введите любой символ');
    emptyArr.push(symbols);
  }
  emptyArr.pop(symbols);
  emptyArr.forEach((elem) => {
    if (isNaN(+elem)) {
        sum;
    } else {
        (sum += +elem);
      }
  alert(sum);
});