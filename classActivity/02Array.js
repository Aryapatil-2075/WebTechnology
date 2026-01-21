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

//difference between arrayFrom =converts iterable
//arrayof=converts value
