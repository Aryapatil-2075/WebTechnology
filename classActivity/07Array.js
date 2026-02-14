const superHeros = ["Batman", "Ironman", "SuperMan", "SpiderMan"];
const cars = ["Mercedes", "BMW", "Audi"];

superHeros.push(cars);
console.log("Push :" + superHeros);
//Batman,Ironman,SuperMan,SpiderMan,Mercedes,BMW,Audi

console.log("Index values :" + superHeros[3]); //SpiderMan

console.log("Index of word 3 and from letter 2 value :" + superHeros[3][2]);
//Index values :SpiderMan
//Index of word [3] and from letter [2] value :i

//Array Concat
const arr1 = superHeros.concat(cars);
console.log(arr1);
//[
//   'Batman',
//   'Ironman',
//   'SuperMan',
//   'SpiderMan',
//   [ 'Mercedes', 'BMW', 'Audi' ],
//   'Mercedes',
//   'BMW',
//   'Audi'
// ]

const arr2 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [(4, 5)]]];
console.log("Index inside Index :" + arr2);
//Index inside Index :1,2,3,4,5,6,7,8

const arr3 = arr2.flat(Infinity);
console.log(arr3);
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

const arr4 = arr3.flat(1);
console.log(arr4);

//how the nested array should be flatned default value is 1
////flatens all levels no matter how deep it is Infinity
//flats does not change original array return new array useful when nested array

//Data Scripting using this array

console.log(Array.isArray("Arya")); //false
//check even value is array or not

console.log(Array.from("Arya")); //[ 'A', 'r', 'y', 'a' ]
//converts an iterable objects like String,map,set into an Array

console.log(Array.from({ name: "arya" })); //[]
console.log(Object.keys({ name: "Arya" })); //[ 'name' ]
console.log(Object.entries({ name: "Arya" })); //[ [ 'name', 'Arya' ] ]

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
//create new array from given value no matters how many

// difference between Array.of() and Array.from()
// Array.of() :
// array.from() :

//activities

//Array.of() creates a new array from the values you pass
//Array,String,Object,Function
let b = Array.of("A", "B", "C");
console.log(b); // ["A", "B", "C"]

let a = Array.of(10, 20, 30);
console.log(a); // [10, 20, 30]

let c = Array.of({ name: "Arya" }, 100, true);
console.log(c); // [{name:"Arya"}, 100, true]

let f = Array.of(function () {});
console.log(f); // [ƒ]

//Array.from() converts iterable or array-like objects into an array
//It works with:String Array SetMap arguments Node List

//String - array
let s = "Java";
console.log(Array.from(s)); // ["J", "a", "v", "a"]

//array like object
let arrLike = { 0: "A", 1: "B", length: 2 };
console.log(Array.from(arrLike)); // ["A", "B"]

//set
let set = new Set([10, 20, 30]);
console.log(Array.from(set)); // [10, 20, 30]

let obj = { a: 1, b: 2 };
// Array.from(obj); // error becoz direct support not for object
console.log(Array.from(Object.values(obj)));
