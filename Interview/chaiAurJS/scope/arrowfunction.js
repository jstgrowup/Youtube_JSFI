const user = {
  username: "subham",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome`);
    console.log("inside", this);
  },
};
user.welcomeMessage();
user.username = "dey";
user.welcomeMessage();
console.log("outside", this);
function chai() {
  let username = "subham";
  console.log(this.username);
  //   undefined because this keyword only works in the
}
chai();

const chai1 = function () {
  let username = "arrow";
  console.log(this.username);
};
chai1();
