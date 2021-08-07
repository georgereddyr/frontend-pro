//1
const arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let sum = 0;
arr.forEach((elem) => {
    if (isNaN(+elem)) {
        return sum;
    } else {
        sum += +elem;
    }
});
alert(sum);

//2
let array = ['AngularJS', 'jQuerry'];
array.unshift('Backbone.js');
array.push('ReactJS', 'Vue.js');
array.splice(1, 0, 'CommonJS');
let useless = array.indexOf("jQuery");
alert('это сдесь лишнее: ' + array.splice(useless, 1));


//3
let arr1 = "Как однажды Жак звонарь сломал фонарь головой".split(' ');
let index = arr1.indexOf('однажды');
arr1.splice(4, 0, arr1[index]);
arr1.splice(index, 1);
[arr1[5], arr1[6]] = [arr1[6], arr1[5]];
let str = arr1.join(' ');
console.log(str);


//4
let person = {
  name: "James",
  age: "22",
  gender: "male"
};

let prop = prompt('Че там надо', '');

if (prop in person) alert('Свойство ' + prop + ' существует!');
else (person[prop] = prompt("Введите новое значение"));


//...5
const mobile = {
  brand: prompt('Brand'),
  model: prompt('Model'),
  resolution: prompt('Resolution'),
  color: prompt('Color'),
};
person.mobile = mobile;
console.log(person);


//6
let array2 = [];

for (let i = 0; i < 5; i++) {
    let value = prompt('Enter a few values', '');
    array2.push(value);
}

let arrSum = array2.reduce(function (sum, i) {
    if (!isNaN(i)) {
        return sum + Number(i);
    } else {
        return sum + 0;
    }
}, 0 );

console.log(arrSum);


//7
let a = 0;
let b = 0;
const len = 5;
const height = 10;
let output = [];
for(a = 0; a <= height; a++){
  output.push([]);
  for(b = 0; b <= len; b++){
    output[a].push(`${a} x ${b} = ${a*b}`);
  }
}
console.table(output);