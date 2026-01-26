//Act 1 create a array fun and object and print
//actr2 reverse number
//check no. palindrome
//fibonacci series
//find largest ele in array
//remove dup ele from array
//find missing no in array
//rev a str
//count vowels in str
//chec palidrome in str
//chec prime no.
//factorial no.
//fun to find even or odd
//fun to find sum of array
function displayStudents(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result +=
      "Name: " +
      arr[i].name +
      ", Age: " +
      arr[i].age +
      ", City: " +
      arr[i].city +
      "<br>";
  }

  return result;
}
