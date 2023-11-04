// singleton : if the object is made using constructor than its a singleton
// object literals
const mySym = Symbol("key");
const Jsuser = {
  name: "subham",
  age: 13,
  location: "bangalore",
  email: "deysubham999@gmail.com",
  isLoogedIn: false,
  lastLoginDays: ["sunday", "saturday"],
};

// console.log(Jsuser.email);
Jsuser.email = "hitesh@chatgpt";
// Object.freeze(Jsuser);
// after freezing the values we cant propagate anymore
Jsuser.greeting = function () {
  console.log("here iam function");
};
Jsuser.greeting2 = function () {
    console.log(`here iam function ${this.name}`);
  };
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());

