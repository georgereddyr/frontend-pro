//УСЛОВНЫЕ И ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

//1
let x = +prompt('Enter a number', '');
switch (true) {
    case x > 0:
        alert(x + ' is positive');
        break;
    case x < 0:
        alert(x + ' is negative');
        break;
    case 0:
        alert('Zero');
        break;
    default:
        alert('NaN');
}


//2
let a = +prompt('Declare a:');
let b = +prompt('Declare b:');
let c = +prompt('Declare c:');
let resValue = a;
let resName = 'a';

if (a > b) {
    resValue = b;
    resName = 'b';
    alert(resName + '=' + resValue);
}
if (b > c) {
    resValue = c;
    resName = 'c';
    alert(resName + '=' + resValue);
}


//3
let myMoney = +prompt('My money:', '');
let theirMoney = +prompt('Your money:', '');
let summ = myMoney + theirMoney;

if (summ > 1000) {
    alert('We can fly to Mallorca with our $' + summ);
} else if (summ == 0 || summ < 0) {
    alert('Are u mad bruh?');
} else {
    alert('At least we can have a beer with our $' + summ);
}


//4
let age = prompt('Age:', '');

if (age >= 20 && age < 27) {
    alert('Тебе повесточка!');
} else {
    alert('Не сцы, всё ок');
}


//5
let bus = +prompt('Bus number:', '');

if (bus == 7 || bus == 225 || bus == 255) {
    alert('Finally, go home');
} else {
    alert('Wait for another bus');
}


//6
let day = prompt('Current day of the weeek?', '');

if (day != 'saturday' && day != 'sunday') {
    alert('Go to work!');
} else {
    alert('stay home');
}


//7
let x1 = +prompt('Enter a number for x between -20 and 20', '');
let y1 = +prompt('Enter a number for y between -20 and 20', '');

if ((x1 <= 1 && y1 >= 3) || y1 < 0) {
    alert(x1 + y1);
} else {
    alert('Wrong!');
}

//...8
if ((x1 > 2 && x1 < 11) && (y1 >= 6 && y1 < 14)) {
    alert(x1 * 2);
} else {
    alert(x1 + 5);
}


//9
function hello() {
    let userName = prompt('Enter your user name:');
    if (userName === null || userName === '') {
        hello();
    } else {
        alert('Hello, ' + userName);
    }
}
hello();


//10: switch-case
function hi() {
    let greeting = '';
    let lang = prompt('Chose lang (ru, en, de)', '');
    switch (lang) {
        case 'en':
            greeting = 'Hello user!';
            alert(greeting);
            break;
        case 'ru':
            greeting = 'Привет, юзер!';
            alert(greeting);
            break;
        case 'de':
            greeting = 'Hallo benutzer!';
            alert(greeting);
            break;
        default:
            hi();
    }
}
hi();

//10: if-else
function hi() {
    let greeting = '';
    let lang = prompt('Chose lang (ru, en, de)', '');

    if (lang === 'en') {
        greeting = 'Hello user!';
        alert(greeting);
    }
    if (lang === 'ru') {
        greeting = 'Привет, юзер!';
        alert(greeting);
    }
    if (lang === 'de') {
        greeting = 'Hallo benutzer!';
        alert(greeting);
    }
    if (lang === null || lang === '') {
        hi();
    }
}
hi();


//11
let date = new Date(),
    month = date.getMonth();

if (month == 12 || month == 1 || month == 2) {
    console.log("it's winter");
}
if (month == 3 || month == 4 || month == 5) {
    console.log("it's spring");
}
if (month == 6 || month == 7 || month == 8) {
    console.log("it's summer");
}
if (month == 9 || month == 10 || month == 11) {
    console.log("it's fall");
}


//12
let language = prompt('Enter a language (en/ru)', '');
let dayW = prompt('Enter a day of the week (0-6)', '');
let result = '';

function week() {
    if (language == 'ru') {
        if (dayW == '0') {
            result = 'Воскресенье';
            alert(result);
        }
        if (dayW == '1') {
            result = 'Понедельник';
            alert(result);
        }
        if (dayW == '2') {
            result = 'Вторник';
            alert(result);
        }
        if (dayW == '3') {
            result = 'Среда';
            alert(result);
        }
        if (dayW == '4') {
            result = 'Четверг';
            alert(result);
        }
        if (dayW == '5') {
            result = 'Пятница';
            alert(result);
        }
        if (dayW == '6') {
            result = 'Суббота';
            alert(result);
        }
    }
    if (language == 'en') {
        if (dayW == '0') {
            result = 'Sunday';
            alert(result);
        }
        if (dayW == '1') {
            result = 'Monday';
            alert(result);
        }
        if (dayW == '2') {
            result = 'Tuesday';
            alert(result);
        }
        if (dayW == '3') {
            result = 'Wednesday';
            alert(result);
        }
        if (dayW == '4') {
            result = 'Thursday';
            alert(result);
        }
        if (dayW == '5') {
            result = 'Friday';
            alert(result);
        }
        if (dayW == '6') {
            result = 'Saturday';
            alert(result);
        }
    }
}
week();



//ЦИКЛЫ
//1
const hash = '#',
    dot = '.';
let str = dot + hash;
for (let i = 0; i < 4; i++) {
    str = str + dot + hash;
    if (i == 3) {
        str = str + dot;
    }
}
console.log(str);


//2
function squaredValue(num) {
    for (let i = 1; i < num; i++) {
        if (i % 4 === 0) {
            alert(i + '^2 = ' + Math.pow(i, 2));
        }
    }
}
squaredValue(+prompt('Enter a number:', ''));


//3
let bboy = 'George',
    song = 'Happy birthday to you';

for (let i = 0; i <= 3; i++) {
    console.log(song);
    if (i == 1) {
        song = 'Happy birthday dear ' + bboy;
    } else {
        song = 'Happy birthday to you';
    }
}


//4
let conf;
do {
    conf = confirm("OK or die");
}
while (conf === false);


//5
(function sumOfOdd(summ) {
    let newSum = 0;
    for (let i = 0; i < summ; i++) {
        if (i % 2 !== 0) {
            newSum += i;
        }
    }
    alert(newSum);
})
(+prompt("Введите число"));


//6
let iteration = 0;
let random = 0;
do {
    random = Math.random();
    iteration++;
} while (random < 0.9);
alert('Number: ' + random + ' Iterations: ' + iteration);


//7
let multipl = "";
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        multipl += `${i}*${j}=${i * j}\n`;
    }
}
console.log(multipl);



//8
const fNum = 10;
let n1 = 0,
    n2 = 1,
    next;

let i = 1;
for (; i <= fNum;) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next;
    i++;
}


//9
let input1;
let iter = 0,
    sum1 = 0,
    str1 = 0;
while (true) {
    input1 = prompt("Введите число:", '');
    if (input1 === null || input1 === '') {
        break;
    }
    let input1Num = +input1;
    sum1 += input1Num;
    iter++;
}
console.log('Количество введенных чисел: ' + iter + '; Cумма: ' + sum1 + '; Среднее арифметическое: ' + sum1 / iter);


//10
const pass = "qwerty";
let input = "";
outer: while (input !== pass) {
    input = prompt('Введите пароль:', '');
    if (input === null) {
        let br = confirm("Вы уверены, что хотите отменить авторизацию?");
        if (br) {
            alert('Вы отменили авторизацию');
            break;
        }
        if (!br) {
            continue outer;
        }
    }
    alert("Неверный пароль!");
    input = prompt("Введите пароль:");
}
if (input === pass) {
    alert("Вы успешно авторизованы!");
}


//11
for (let i = 0; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}