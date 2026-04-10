//synchronous js
//code execute line by line each task to waits for the previous task to finish
//javascript is synchronous and singlethreaded
console.log("Start");
function add(a, b) {
  return a + b;
}
let result = add(2, 4);
console.log(result);

console.log("End");
//Asynchronous in js -
//some task take time like api call, file read, database, and timer
//js doesn't waits it moves to next line behaviour is non-blocking
//fetching data from server,reading file ,set timeout api calls
console.log("Start");
setTimeout(() => {
  console.log("inside timeout");
}, 2000);

console.log("End");
//settimeout is asynchronous it waits 2 sec mean while js prints a after 2 sec it will print inside timeout line

//activity
//1. guess the output game
//blocking and non-blocking 2 examples
//real time example company use of sync and async
//API fetch method use krun activity kara
