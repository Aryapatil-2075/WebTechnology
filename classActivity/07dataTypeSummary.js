//Symbol :
const anotherID = Symbol("123");
console.log(anotherID); //Symnol(123)

//=== is used  to check datatype as well as equal to simultaneously
const ID = 123;
console.log(ID === anotherID); //false

//javascript is dynamically typed

//array
const arr = ["Arya", "Shruthi", "Sia"];
const num = [1, 2, 3];

//Object key and value
const obj = {
  fname: "JS",
  age: 24,
};
console.log(obj); //{fname:'JS' , age:24}
console.log(obj.age); //24
console.log(obj["fname"]); //JS

//Activity 1 deep study on functions

function fn() {
  console.log("Arya");
}

const myfunction = function () {
  console.log("Arya");
};

fn();
console.log(myfunction);
// funtion : it is a block of code used to execute a specific task.
/*
definition : means writing the function and assigning it to a variable.
             must be defined before use.
*/
//add(2, 3);   // Error: Cannot access 'add' before initialization
const addition = function (a, b) {
  return a + b;
};

//declaration : simply write a function with actual logic in scope.
function function_name() {
  console.log("arya");
}
function add(a, b) {
  return a + b;
}

// to store  function in a variable
const variable_name = function function_name() {
  console.log("arya");
};
//Array function :
const name = () => console.log("arya");
const adds = (a, b) => a + b; // Arrow Function Definition

//Memory 2 types stack and heap
//stack used for primitive
//heap used for non-primitive

let myNewYoutudeChannel = "ABP";
let newYoutudeChannel = myNewYoutudeChannel;

console.log(newYoutudeChannel);

newYoutudeChannel = "SBP";
console.log(newYoutudeChannel);

//Primitive data stored in stack will we assgn 1 var to another

let user1 = {
  fname: "arya",
  age: 21,
  id: 311,
};
let user2 = user1;
user2.id = 20;
console.log(user1.id); //20
console.log(user2.id); //20

// non-primitive datatype object is stored heap memory when we assign one object to another variable reference is copied not value if change one both value changes

console.log(balance.toString());
