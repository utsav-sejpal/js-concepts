"use strict"
document.addEventListener('DOMContentLoaded', function () {
    // console.log('after load content');
    // name()
    // name1()

    // let demo = document.getElementById('demo');
    // let h1Tag = document.createElement('h1')
    // demo.append(h1Tag)
    // console.log(demo);
    // 
});
let globalScopeVariable = 'this is global scope';
// console.log(globalVariable);


function name(name) {
    let functionScopeVariable = 'this is function scope';

    if (name == 'test user') {
        let blockScopeVariable = 'this is block scope';
        // console.log(blockScopeVariable);
        // console.log(functionScopeVariable);
        // console.log('condition is true');
    }

    // console.log(functionScopeVariable);
    // console.log(blockScopeVariable); // can not use here, it's block scope variable

}
name('test user');

// let name1 = () => {
//     console.log("Arrow function");
// };
// console.log('first executed');

class Car {
    constructor(name, color = 'black') {
        this.name = name;
        this.color = color;

    }

    getCarName() {
        return 'the name of car is ' + this.name + ' and the color is ' + this.color;
    }
}

// Inheritance
class Meetup {
    constructor() {
        console.log("inside Meetup constructor");
    }
    parentMethod() {
        console.log('This is parent method');
    }
}

class TechMeet extends Meetup {
    // constructor() {
    //     super();
    //     console.log("inside TechMeet constructor");
    // }
}

class TechMeet1 extends TechMeet {
    // constructor() {
    //     super();
    //     console.log("inside TechMeet constructor");
    // }

    // you call direct this method using class 
    static getDate() {
        return 'Today is 12/12/2020';
    }
    static getValueOfGlobalVariable() {
        return globalScopeVariable;
    }
}

// let meetup = new Meetup();
// let teachMeet = new TechMeet1();
// teachMeet.parentMethod();
// console.log(TechMeet1.getValueOfGlobalVariable());
// inside Meetup constructor
// inside TechMeet constructor





const persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];
// const numbers = [1, 2, 3, 4, 5];
const numbers = ['value 1', 'value 2'];

let nameArr = [];
let numberForeach = persons.forEach(element => {
    nameArr.push('the name is ' + element.firstname);
});

// console.log(nameArr);
// console.log('==================');

let numberMap = persons.map(function (value) {
    return 'the name is ' + value.firstname
})

let personFilter = persons.filter(function (value) {
    // return  value.firstname == 'Kaylee' || value.lastname == 'Cobb' ;
    return value.firstname == 'Kaylee' && value.lastname == 'Cobb';
})

let reduceMethod = numbers.reduce((previous, current) => {
    return previous + current
}, 'initialize value ')

// console.log(reduceMethod);

// console.log(personFilter);

let add = x => x + x;
// console.log(add(5));

// Higher order function
function step1(param) {
    return function (childParam) {

        console.log(param);
        console.log(childParam);
    }
}
// let step1Function = step1(5);
// step1Function(10);
// console.log(step1Function);

let date = new Date();
// console.log(date.getFullYear());


// BOM
// console.log(window);
// window.open('https://www.w3schools.com/js/js_window.asp')
// console.log(screen.width);
// window.location.assign('https://www.w3schools.com/js/js_window_location.asp')
let form = document.getElementById('mobileForm');
let mobile = document.getElementById('mobile');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    try {
        // alet(123)
        if (mobile.value == '') throw 'Mobile no. is required';
        if (isNaN(mobile.value)) throw "Mobile no. not a number";
        if (mobile.value.length < 10) throw 'Mobile no. at least contain 10 digit';
        console.log(mobile.value);
    } catch (error) {
        mobile.value = '';
        console.log('This is not right syntax');
    } finally {
        console.log('finally block');
    }
})

console.log(navigator.onLine);
