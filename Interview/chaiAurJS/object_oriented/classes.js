// let User = {
//   username: "hitesh",
//   loginCount: 8,
//   signedIn: true,
//   getUserDetals:function(){
//      console.log(`got User details ${this.username}`);
//   }
// };
function UserConst(username, logincount, isLoogedIn) {
  this.username = username;
  this.logincount = logincount;
  this.isLoogedIn = isLoogedIn;
  return this;
}
const newUser = new UserConst("hitesh", 18, true);
const userTwo = new UserConst("subham", 43, false);
//if you dont use new keyword than it will ovwewrite the previous object

console.log("newUser:", newUser);
console.log(("userTwo", userTwo));
