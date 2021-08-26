//1
function compareMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
console.log(compareMax(-1, 0));


//2
function getMin(...value) {
    return value.reduce((a, b) => {
        if (a > b) {
            return b;
        } else {
            return (a = b);
        }
    }, value[0]);
}


//3
let users = [{
    firstName: "John",
    lastName: "Smith",
    age: 15
},
{
    firstName: "Ariana",
    lastName: "Grande",
    age: 27
},
{
    firstName: "Harrison",
    lastName: "Ford",
    age: 77
},
{
    firstName: "Billie",
    lastName: "Eilish",
    age: 17
},
{
    firstName: "Bill",
    lastName: "Gates",
    age: 66
},
{
    firstName: "Darth",
    lastName: "Vader",
    age: 45
},
{
    firstName: "Dmitrii",
    lastName: "Gordon",
    age: 53
},
{
    firstName: "Egor",
    lastName: "Krid",
    age: 30
},
{
    firstName: "Sasha",
    lastName: "Grey",
    age: 33
},
{
    firstName: "Vasya",
    lastName: "Pupkin",
    age: 11
},
];

let sortByAge = users.filter((item) => {
return item.age < 18;
});
let addFullName = users.forEach((user) => (user.fullName = user.firstName + ' ' + user.lastName));
let fullNameOnly = users.reduce((acc, item) => {
acc.push(item.fullName);
return acc;
}, []);
console.log(sortByAge);


//4
function removeFirstElem(array) {
    array.splice(0, 1);
}


//5
let arrayZ = [1,2,3,4,5,6]; 
 
function noPush(array, ...elements){ 
    for(let i = 0; i < elements.length; i++){ 
        array[array.length] = elements[i]; 
    } 
    console.log(array);     
} 
noPush(arrayZ, 1, 2); 
noPush(arrayZ, 3, 4);


//6
let source = {
    firstname: "Tom",
    age: 10
};
let extend = (source, ...arg) => {
    let obj = {
        ...source
    };
    for (let i = 0; i < arg.length; i++) {
        for (let key in arg[i]) {
            obj[key] = arg[i][key];
        }
    }
    return obj;
};
let s = extend(source, {
    firstname: "John"
}, {
    lastname: "Doe"
});
console.log(s);


//7
function setComment(date, message, author = 'Anonymous') {
    if (date === undefined || message === undefined) {
        return alert('данные переданы некорректно');
    }
    console.log(author, date, message);
}
setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');