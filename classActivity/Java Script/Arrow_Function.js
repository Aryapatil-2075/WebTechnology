// this keyword is used to inform current context

function myfunction1() {
  let username = "Arya";
  console.log(username);
  console.log(this.username);
}
myfunction1();

const myfunction = function () {
  let username = "Arya";
  console.log(username);
  console.log(this.username);
};
myfunction();

const abc = () => {
  let username1 = "abc";
  console.log(this);
  console.log(this.username);
};
abc();

const addnum = (num1, num2) => {
  return num1 + num2;
};
addnum(10, 20);
