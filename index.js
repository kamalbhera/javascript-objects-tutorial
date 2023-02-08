// 1. delete the objects

const user = {
    name:"dhoni",
    age:40
}

delete user.age

// 2. when key should be in string

user["marial status"] = true


// 3. Dynamically add key and value

const property = "firstName"
const firstname = "Shahith"

const person = {
    [property] : firstname
}
console.log(person)

// Accessing
console.log( person.firstName ); // Shahith
console.log( person[property] ); // Shahith

// 4. Looping

for(let key in user) {
    console.log(`Key is ${key}`)
    console.log(`value is ${user[key]}`)
}

for(let key of Object.keys(user)) {
    console.log(`Key is ${key}`) // name age
    console.log(`value is ${user[key]}`) //dhoni //40
}

for(let value of Object.values(user)) {
    console.log(`value is ${value}`)  // dhoni //40
}

