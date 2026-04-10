//Singleton

const user = new Object();
console.log(user);

const user1 = {
  //Non Singleton Object
  id: 1234,
  name: "Arya",
  isLogin: true,
};
//Object inside Object
const regularUser = {
  email: "shra@gmail.com",
  userDetails: {
    fullUsername: { fname: "shravani", lastname: "dake" },
  },
};
console.log(regularUser);
console.log(regularUser.userDetails.fullUsername.fname);
