/*
A PROMISE is an object that represent future result of an asynchronous operation.
promise means give results later

example : Zomato application

promises has 3 states one is 
waiting (pending) 
resolved (success) or 
rejected 

example :pending -> resolve -> rejected

syntax :


*/
let myPromise = new Promise((resolve, reject) => {
  let success = true;
  //   let success = false;

  if (success) {
    resolve("Data Fetched Successful");
  } else {
    reject("Error while data fetching...");
  }
});

myPromise
  .then((result) => {
    //runs when success
    console.log(result);
  })
  .catch((error) => {
    //runs when error
    console.log(error);
  });

//Home activity
//1) why Promises is better then callback
//2)

let myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task completed");
    resolve();
  }, 3000);
});

myPromise1.then(() => {
  console.log("Promise consume");
});

//Example 2

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Arya", ID: 23 });
  }, 3000);
});

promise3.then((user) => {
  console.log(user);
});

//Activity
//create 4 promise examples
//async use krun keyword promise
//2 example
