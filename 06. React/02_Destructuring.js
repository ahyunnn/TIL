// 1. 객체 분해
let person = {
  name: "noona",
  age: 20,
};

// let name = person.name;
// let age = person["age"];

let { name, age } = person;

console.log(name, age);

// 2. 배열 분해도 가능하다
let array = [1, 2, 3];
let [a, b, ...rest] = array;

console.log(a, b);
console.log(rest);
