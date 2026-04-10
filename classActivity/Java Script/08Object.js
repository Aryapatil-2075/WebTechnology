/* there are 2 types of object declaration 
 object literals, constructor, singleton
 when we declare object as a constructor it creates singleton object it means itself object
 when we declare object as a literals it not creates singleton object 
 objet means key value pair
 example of object literals 
*/
let myobj = {
  name: "Arya",
  age: 21,
  location: "Sangli",
  email: "arya@gmail.com",
  isLogin: true,
  lastlogin: ["Monday", "Tuesday", "Wednesday"],
  fullName: "ARYA",
  mySymbol: "Mykey1",
};
console.log(myobj);
console.log(myobj.name);
myobj.email = "shravani172gmail.com";
console.log(myobj.email);
// freeze used to keep data integrate that is email is changed and not write this line
// then it will print new value and if we write this line then if fwe try to change value
//  it will not print old value instead of new value
// Object.freeze(myobj);
console.log(myobj.lastloginday);
console.log(myobj.age);
console.log(myobj.location);
//console.log(myobj.[mysymbol]);
//console.log(typeof myobj.mysymbol);

//Example of symbol
const mysymbol = Symbol("JS");
const myobj2 = {
  [mysymbol]: "mykey2",
};

console.log(mysymbol);
console.log(myobj2);
console.log(typeof myobj2[mysymbol]);
console.log(typeof myobj2);

myobj.greeting = function () {
  console.log("Hello JS user");
};
console.log(myobj.greeting());
