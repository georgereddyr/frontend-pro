let a = 5;
let b = 3 * a;
let c = a + b;
console.log(a, b, c);


let firstName = prompt('your first name', '');
let lastName = prompt('your last name', '');
alert("What's up, John Doe");


let x = prompt('enter the first value', '');
let y = prompt('enter the second value', '');
alert(`${x*y}, ${x/y}, ${x+y}, ${x-y}`);


let workingDays = prompt('Working days:', '');
let workingHours = prompt('Working hours:', '');
let salaryRate = prompt('Salary per hour:', '');
alert(workingDays * workingHours * salaryRate);


let odd = prompt('Gimme an odd number', '');
if (odd % 2 == 0) {
    alert(odd + ' is even!');
} else {
    alert(odd + ' is odd!');
}


let num = prompt('Gimme a number', '');
if (isNaN(num)) {
    alert(num + ' is NaN!');
} else {
    alert(num + ' is a number.');
}


let random = Math.random();
let secondNum = prompt('Enter a number', '');
if (random*100 > secondNum) {
    alert(Math.round(random*100) + ' is bigger than ' + secondNum);
} else {
    alert(Math.round(random*100) + ' is smaller than ' + secondNum);
}