let myDate = new Date();
console.log(myDate); //2026-01-23T09:57:32.678Z
console.log(typeof myDate); //object
console.log(myDate.toString()); //Fri Jan 23 2026 15:28:34 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); //2026-01-23T09:59:13.382Z
console.log(myDate.toLocaleDateString()); //23/1/2026
console.log(myDate.toDateString()); //Fri Jan 23 2026
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMilliseconds());
console.log(myDate.getUTCDate());
console.log(
  myDate.toLocaleString("default", {
    weekday: "long",
  }),
);

let mytime = Date.now();
console.log(mytime);
console.log(Date.now()); //convert milisec
console.log(Date.now() / 1000); //convert sec
console.log(Math.floor(Date.now() / 1000)); // lowest value

//timestamp :
//when we create pool in application then we use timestamp

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Date.now() / 1000);
//proper time which methods
