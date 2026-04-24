// const a = 1;
// a = 3; //error
// console.log(a);

let b = 10;
b = 11; //changed
var c = 20;
c = 22; //changed
console.log(b);
document.writeln(b + "<br>");
console.log(c);
document.writeln(c + "<br>");

// var x = 10;
// var y = 20;
{
  var x = 100;
  var y = 200;
  console.log(x, y);
}
console.log(x, y);

//activity NO 1
//Display student name, Student ID,email;
console.log("Activity 1");
let student_name = "Arya Patil";
let student_id = 311;
let email = "aryapatil2075@gmail.com";
console.log("Student Name", student_name);
document.writeln("Student Name :" + student_name + "<br>");
console.log("Student ID", student_id);
document.writeln("Student ID :" + student_id + "<br>");
console.log("Student Email", email);
document.writeln("Student Email :" + email + "<br>");

//activity NO 2
//check no even or odd
console.log("Activity 2");
num = 2;
if (num % 2 == 0) {
  console.log("EVEN NUMBER", num);
  document.writeln("Even No :" + num + "<br>");
} else {
  console.log("ODD NUMBER", num);
  document.writeln("Odd No :" + num + "<br>");
}

//activity NO 3
//check student pass or fail
console.log("Activity 3");
let marks = 45;
if (marks >= 40) {
  console.log("PASS", marks);
  document.writeln("Pass :" + marks + "<br>");
} else {
  console.log("FAIL", marks);
  document.writeln("Fail :" + marks + "<br>");
}

//activity NO 4
//print display no 1 to 10;
console.log("Activity 4");
for (let i = 1; i <= 10; i++) {
  console.log(i);
  document.writeln(i + "<br>");
}

//activity NO 5
console.log("Activity 5");
let p = 10;
r = p;
p = 2005;
console.log(p, r);
document.writeln(p + "<br>" + r + "<br>");
