// funtion : it is a block of code used to execute a specific task.
/*
definition : means writing the function and assigning it to a variable.
             must be defined before use.
*/
//add(2, 3);   // Error: Cannot access 'add' before initialization
const addition = function (a, b) {
  return a + b;
};

//declaration : simply write a function with actual logic in scope.
function function_name() {
  console.log("Arya");
}
function add(a, b) {
  return a + b;
}

// to store  function in a variable
const variable_name = function function_name() {
  console.log("Arya");
};
//Array function :
const name = () => console.log("Arya");
const adds = (a, b) => a + b; // Arrow Function Definition
