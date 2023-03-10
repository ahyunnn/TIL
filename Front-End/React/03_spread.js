let person = {
  name: "noona",
  age: 12,
};

// 객체가 복사돼서 새로 생기는 것 (person, person2는 다른 주소 참조)
let person2 = { ...person };

// 객체의 주소값만 복사 (person, person3는 같은 주소 참조)
let person3 = person;

// 값 추가 가능
let person4 = { ...person, address: "incheon" };

// 값 변경 가능
let person5 = { ...person, name: "ahyun" };

console.log(person2); // { name: 'noona', age: 12 }
console.log(person3); // { name: 'noona', age: 12 }

console.log(person == person2); // false
console.log(person == person3); // true

console.log(person4); // { name: 'noona', age: 12, address: 'incheon' }
console.log(person5); // { name: 'ahyun', age: 12 }

// 배열도 가능
let a = [1, 2];
let b = [...a, 3];
let c = [...a, ...b];

console.log(a); // [ 1, 2 ]
console.log(b); // [ 1, 2, 3 ]
console.log(c); // [ 1, 2, 1, 2, 3 ]