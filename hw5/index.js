//1
const calculator = {
    read() {
        this.a = +prompt('Enter the first value:', '');
        this.b = +prompt('Enter the second value:', '');
        if (isNaN(this.a) || isNaN(this.b)) {
            alert('A number should be here!');
            this.read();
        }

    },
    sum() {
        return this.a + this.b;
    },
    multi() {
        return this.a * this.b;
    },
    diff() {
        if (this.a > this.b) {
            return this.a - this.b;
        }
        return this.b - this.a;
    },
    div() {
        return this.a / this.b;
    }
};
calculator.read();
console.log('Summ: ' + calculator.sum);
console.log('Multipl: ' + calculator.multi);
console.log('Diff: ' + calculator.diff);
console.log('Div: ' + calculator.div);


//2
const coffeeMachine = {
    message: "Your coffee is ready!",
    start() {
        setTimeout(() => alert(this.message), 3000);
    },
};
coffeeMachine.start();


//3
const counter = {
    count: 0,
    inc() {
        this.count++;
        return this;
    },
    dec() {
        this.count--;
        return this;
    },
    getValue() {
        return this.count;
    },
};
let current = counter.inc().inc().dec().inc().dec().getValue();
console.log(current);


//4
const country = {
    name: "Ukraine",
    language: "ukrainian",
    capital: {
        name: "Kyiv",
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}
format.call(country, "", ""); // Ukraine
format.apply(country, ["[", "]"]); // [Ukraine]
format.call(country.capital, "", ""); // Kyiv
format.apply(country.capital, ["", ""]); // Kyiv
format.apply(country.name, ["", ""]); // undefined


//6
function concat(str, hello, space) {
    console.log(str + hello + space);
}
let hello = concat.bind('', 'Hello', ' ');
hello('World');
hello('John');


//7
function pow(x) {
    let result = x;
    for (let i = 1; i < 3; i++) {
        result = result * x;
    }
    return result;
}
console.log(pow(2));


//8
function sum(...args) {
    if (args.length === 1){
        return args[0];
    }
    else {
      let num1 = args.pop();
      let num2 = args.pop();
      return sum(...args, num1 + num2);
    }
  }
  console.log(sum(1, 2, 3, 4, 5));

  //или так - KISS
  function sum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5));

//ну или так
function sum(...args) {
    if(args.length === 0) {
        return 0;
    }
    else {
     return args[0] + sum(...args.slice(1));
    }
}
console.log( sum(1, 2, 3, 4, 5));