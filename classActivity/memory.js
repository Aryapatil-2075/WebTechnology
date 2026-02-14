//Memory 2 types stack and heap
//stack used for primitive
//heap used for non-primitive

let myNewYoutudeChannel = "ABP";
let newYoutudeChannel = myNewYoutudeChannel;

console.log(newYoutudeChannel);

newYoutudeChannel = "SBP";
console.log(newYoutudeChannel);

//Primitive data stored in stack will we assign 1 var to another

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
/* stack : this memory used for primitive datatypes like string number boolen 
           it menas copy of value is given.
           when we assign one variable to another then changing does not affect to others.
*/
let myoutubename = "SSD";
let newmyoutbename = myoutubename;
console.log(myoutubename);
console.log(newmyoutbename);
myoutubename = "ABC";
console.log(myoutubename);

/* heap :  memory used for non-primitive datatypes like objects
           reference or address is shared.address
           objects are stored in when we assign one onother to another variable reference is copied not the value.
           if we change one both variables keeps changes.
*/
let user11 = { fname: "Arya", age: 21, Id: 303 };
let user2 = user11;
console.log(user11);
console.log(user11.Id);
console.log(user2.Id);
user2.Id = 305;
