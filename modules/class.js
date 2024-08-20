"use strict"
// console.log('class.js');

class MyDetails {
    constructor(name) {
        this.name = name;
    }

    getMessage() {
        return `Hello, my name is ${this.name}.`
    }
}

let details = new MyDetails('Test User');
// console.log(details.getMessage());

let getMessage1 = (name) => {
      return `Hello, my name is ${name}.`
}

export {MyDetails as default, getMessage1};