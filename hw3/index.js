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
function prop() {
  const person = {
      name: "George",
      gender: "Male",
      age: "28"
  };
  let property = prompt('Введите свойство объекта:');

  if (property in person) {
      alert('Cвойство ' + property + ' существует!');
  } else {
      person[property] = prompt('Введите новое значение свойства:');
      prop();
  }
}
prop();


//5



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