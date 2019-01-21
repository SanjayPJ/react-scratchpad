// const and let
const name = "Sanjay PJ";
// name = "Athul Raj"

let author = "Athul Raj";
author = name;
console.log(author);

const person = {
    name: "sanjay pj",
    age: 44
}

person.name = "Athul Raj";
person.age = 34;

console.log(person);

// person = {}

// regular function

function say_hello() {
    console.log("Hello World!!!");
}

say_hello();

// arrow functions

const say_hellow = (name) => {
    console.log(`Hellow ${name}`);
}

say_hellow("Sanjay PJ");

// foreach

const fruits = ['Apples', 'Oranges', 'Grapes'];

fruits.forEach((fruit) => {
    console.log(fruit);
})

// map

const single_fruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());

console.log(single_fruit);

// filter

const people_list = [{
        name: "Sanjay PJ",
        age: 19
    },
    {
        name: "Athul Raj",
        age: 14
    }
];

const people_list_w = people_list.filter(person => person.name != "Athul Raj");

console.log(people_list_w);

// spread

const address_list = ["Sanjay PJ", 23, "Kollam"];
const new_address_list = [...address_list, "sanjaypjayan2000@gmail.com"];
const filterd_address_list = [...address_list.filter(address => address != 23)];
console.log(filterd_address_list);

console.log(new_address_list);

const address_obj = {
    name: "Sanjay PJ",
    age: 12,
    place: "Kollam"
}

const new_address_obj = {
    ...address_obj,
    email: "sanjaypjayan2000@gmail.com"
}

console.log(new_address_obj);

// destructuring

const profile = {
    first_name: "Sanjay",
    last_name: "PJ",
    full_name: this.first_name + " " + this.last_name,
    address: {
        street: "Kadappakada",
        state: "Kollam"
    },
    hobbies: ["Coding", "Music"]
}

const {
    first_name,
    last_name,
    address,
    hobbies
} = profile;


const {
    street,
    state
} = profile.address;

console.log(first_name, last_name, address, hobbies);
console.log(street, state);

// class

class Person {
    constructor(name, age) {
        // console.log('ran');
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello my name is ${this.name}, and i m ${this.age} years old.`;
    }
}

const person1 = new Person("Sanjay PJ", 34);
const person2 = new Person("Athul Raj", 23);

console.log(person1.name);
console.log(person2.age);
console.log(person2.greet());


// subclasses

class Customer extends Person {
    constructor(name, age, balance) {
        super(name, age);
        this.balance = balance;
    }
    info() {
        return `${this.name} owes ${this.balance}`;
    }
}

const customer1 = new Customer('Sanjay PJ', 34, 9000);

console.log(customer1);

console.log(customer1.info());


// modules

export const name = "Sanjay";
export default Person;

// another file

import name from "./location-of-the-file";
import Person from "./location-of-the-file";