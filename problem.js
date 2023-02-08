// 1.

var obj = {
    a:"one",
    b:"two",
    a:"three"
}
console.log(obj)  // {a:"three",b:"two"}

// 2. 
const nums = {
    a:100,
    b:200,
    title:"My nums"
}

const multipleByTwo = (num) => {
for(const key in num) {
    if(typeof num[key] === "number") {
        num[key] *= 2
    }
}
}

multipleByTwo(nums)
console.log(nums)  //{ a: 200, b: 400, title: 'My nums' }  

// 3.

const a = {} 
let b = {key:"b"}
// b = JSON.stringify(b)
const c= {key:"c"}

//  If b and c is converted to stringify by  JSON.stringify it will be 123 and 456 - a[b] & a[c]

a[b] = 123 // a["[object Object]"]
a[c] = 456 // a["[object Object]"]

console.log(a[b])  //456

// 4.Spread Operator 

console.log([..."shahith"]) // ['s', 'h', 'a','h', 'i', 't','h']

const user = {name:"person"}

const admin = {admin:true,...user}

console.log(admin) //  { admin: true, name: 'person' } 

// 5. JSON.stringify

const detail = {
    user:"shahith",
    level:40,
    health:"Good"
}

const data = JSON.stringify(detail,["level","health"])
console.log(data)  // only stringify level and health {"level":40,"health":"Good"}

//  6.

const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };
  
  console.log(shape.diameter()); // 20
  console.log(shape.perimeter()); //NaN

//   7. Object Referencing

let aa = {greeting:"Hello"}

let bb = aa

aa.greeting = "Hi"

aa = {user:"aa"}

console.log(bb) // {greeting:"Hello"}
 
console.log(bb.greeting)  // "Hi"

console.log({a:1} == {a:1}) // false

// In the above statement, we are comparing two different objects so their references will be different. 
// Hence, we get the output as false for both of the statements.

function changeAgeAndReference(person) {
    person.age = 25; // It will change the personObj1 age value
    person = {
      name: 'John',
      age: 50
    };
// But reassignning will not the change the properties
    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?{ name: 'Alex', age: 25 }
console.log(personObj2); // -> ?{ name: 'John', age: 50 }



//  4 ways to clone an object 👇🏻

//  all of them are different objects

const obj = {a: 1 ,b: 2}
var objclone = Object.assign({},obj);
var objclone2 = JSON.parse(JSON.stringify(employee));
var objclone3 = { ...obj }

console.log(obj,objclone)


