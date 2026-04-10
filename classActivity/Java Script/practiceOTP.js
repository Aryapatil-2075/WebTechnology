function generateOTP() {
  let OTP = "";

  for (let i = 0; i < 4; i++) {
    OTP += Math.floor(Math.random() * 10);
  }
  console.log(OTP);
}
generateOTP();

//for of

let obj = { name: "Arya", age: 21 };
console.log(obj);

for (let num in obj) {
  //   console.log(num); //gives keys
  console.log(obj[num]); //gives values
}

//for of
let array = [1, 2, 3, 4, 5];
for (let nums of array) {
  //   console.log(nums); //1 2 3 4 5
  console.log(array[nums]);
}

//filter
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let ans = arr.filter((num) => {
  return num % 2 === 0;
});
console.log(ans);

//A=1 r=1 y=1 a=1

let str = "AryaPatil";
let obj1 = {};

for (let char of str) obj1[char] = obj1[char] + 1 || 1;
console.log(obj1);

//trim
let string = " Dkte is  my clg ";
console.log(string.trim());

//split
console.log(string.split(" "));

//
