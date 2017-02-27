function add (a,b) {
  return a + b;
}

console.log(add(3,1));

var toAdd=[9, 5];

console.log(add(...toAdd)); // better than this console.log(toAdd[0], toAdd[1]);

// we can spread the values into the argument of the function.

//run using: node playground/spread.js

var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];
var final = [...groupB, 3, ...groupA];

console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen',28];
//Hi Andrew, you are 25

function message (name, age){
  console.log("Hi " + name + ", you are " + age );
}

message(person[0], person[1]);

message(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Mireya',...names];// is not the same as passing only ['Mireya, name].

final.forEach((el)=> {
  console.log("Hi "+ el)
});
