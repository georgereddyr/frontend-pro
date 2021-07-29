// 1
let a = 5;
let b = 3 * a;
let c = a + b;
console.log(a, b, c);

// 2
let firstName = prompt('your first name', '');
let lastName = prompt('your last name', '');
alert("What's up, John Doe");

// 3
let x = +prompt('enter the first value', '');
let y = +prompt('enter the second value', '');
alert(`${x*y}, ${x/y}, ${x+y}, ${x-y}`);

// 4
let workingDays = prompt('Working days:', '');
let workingHours = prompt('Working hours:', '');
let salaryRate = prompt('Salary per hour:', '');
alert(workingDays * workingHours * salaryRate);

// 5
let odd = prompt('Gimme an odd number', '');
if (odd % 2 == 0) {
    alert(odd + ' is even!');
} else {
    alert(odd + ' is odd!');
}

// 6
let num = prompt('Gimme a number', '');
if (isNaN(num)) {
    alert(num + ' is NaN!');
} else {
    alert(num + ' is a number.');
}

// 7
let random = Math.random();
let secondNum = prompt('Enter a number', '');
if (random*100 > secondNum) {
    alert(Math.round(random*100) + ' is bigger than ' + secondNum);
} else {
    alert(Math.round(random*100) + ' is smaller than ' + secondNum);
}

// 8
let str = prompt('Мне нравится изучать Front-end', 'Мне нравится изучать Front-end');
let str2 = prompt('Что вам нравится изучать?', '');
let re = "Front-end";
let sliced = str.slice(0, 21);
let result = sliced + str2;

if (str2.includes(re)) {
    alert('da!');
} else {
    alert('net!');
}

alert(result);