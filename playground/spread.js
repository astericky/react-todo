// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1))
//
// let toAdd = [9, 5]
//
// console.log(add(...toAdd))

// let groupA = ['Jen', 'Cory']
// let groupB = ['Vikram']
// let final = [...groupB, 3, ...groupA]
//
// console.log(final)


let person = ['Andrew', 27]
let personTwo = ['Jen', 29]

function greet (name, age) {
  console.log(`Hi ${name}, you are ${age}`)
}

greet(...person)
greet(...personTwo)

let names = ['Mike', 'Ben']
let final = ['Chris', ...names]

final.forEach((name) => {
  console.log(`Hi, ${name}`)
})
