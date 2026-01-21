//Array
let myArray = [0, 1, 2, 3, 4, 5];
console.log("My Array :" + myArray);
console.log(typeof myArray);

const anotherArray = new Array(0, 1, 2);
console.log("My Arr :" + anotherArray[1]);

//Array Methods

anotherArray.push(7); //0 1 2 3 7
console.log("Pushing value :" + anotherArray);

anotherArray.pop(); //0 1 2 3
console.log("Poping value :" + anotherArray);

anotherArray.unshift(9); //9 0 1 2
console.log("Unshifting value :" + anotherArray);
//shifts all elements and add at first position

console.log("Shift :" + anotherArray.shift()); //9
anotherArray.shift();
console.log(anotherArray); //[1 2] 9 del

console.log("Includes:" + anotherArray.includes()); //false
console.log("Includes:" + anotherArray.includes(1)); //true

console.log("Index Of :" + anotherArray.indexOf(2)); //1

//slice and split use in Array
