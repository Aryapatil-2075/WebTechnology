const output = document.getElementById("output");

function print(title, content) {
  output.innerHTML += `
        <div class="section">
            <h3>${title}</h3>
            ${content}
        </div>
    `;
}

// 1. Arrow vs Normal Function
function greet(name) {
  return name;
}

const greet1 = (name) => name;

print(
  "Activity 1",
  `
    Normal: ${greet("Arya !!")} <br>
    Arrow: ${greet1("DKTE !!")}
`,
);

// 2. this keyword
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi I am ${this.name}`;
  }

  showMyAge() {
    const showAge = () => `I am ${this.age} years old`;
    return showAge();
  }
}

let s1 = new Student("Arya", 20);
let s2 = new Student("ABC", 18);

print(
  "Activity 2",
  `
    ${s1.greet()} <br>
    ${s1.showMyAge()} <br><br>
    ${s2.greet()} <br>
    ${s2.showMyAge()}
`,
);

// 3. Arrow in class
class Car {
  constructor(name) {
    this.name = name;
  }

  getCarName = () => this.name;
}

let c1 = new Car("Mercedes");
let c2 = new Car("BMW");

print(
  "Activity 3",
  `
    ${c1.getCarName()} <br>
    ${c2.getCarName()}
`,
);

// 4. Arrow examples
const getName = (name) => `Hello ${name}`;
const getArray = (arr) => arr.join(", ");
const addTwo = (a, b) => a + b;

print(
  "Activity 4",
  `
    ${getName("Arya")} <br>
    Array: ${getArray([1, 2, 3, 4])} <br>
    Sum: ${addTwo(5, 5)}
`,
);

// 5. Switch
let day = 1;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  default:
    dayName = "Invalid";
}

print("Activity 5", dayName);

// 6. Truthy / Falsy
let values = [false, 0, "", null, undefined, NaN, true, "0", [], {}];

let result6 = values.map((v) => `${v} → ${Boolean(v)}`).join("<br>");

print("Activity 6", result6);

// 7. Ternary
let age = 17;
print("Activity 7", age > 18 ? "Eligible" : "Not Eligible");

// 8. Loops
let arr = [12, 3, 46, 74];

let loopResult = "";
for (let i of arr) loopResult += i + " ";

print("Activity 8", loopResult);

// 9. for-in vs for-of
let arr2 = [10, 20, 30];

let forIn = "";
for (let i in arr2) forIn += `Index ${i} = ${arr2[i]} <br>`;

let forOf = "";
for (let v of arr2) forOf += `Value = ${v} <br>`;

print(
  "Activity 9",
  `
    <b>For In:</b><br>${forIn}
    <b>For Of:</b><br>${forOf}
`,
);

// 10. map & filter
let nums = [21, 53, 23, 85, 90];

let squares = nums.map((n) => n * n);
let evens = nums.filter((n) => n % 2 == 0);

print(
  "Activity 10",
  `
    Squares: ${squares} <br>
    Evens: ${evens}
`,
);
