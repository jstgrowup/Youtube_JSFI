// singleton objects
// const tinder = new Object()
// console.log();
const tinderUser = {};
tinderUser.id = "232f";
tinderUser.name = "samay";
tinderUser.isLoggedIn = false;
console.log(tinderUser);
const regularUser = {
  email: "subahm",
  fullname: {
    userFullName: {
      firstname: "subham",
      lastname: "dey",
    },
  },
};
// console.log(regularUser.fullname?.userFullName.firstname);
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
// const obj3={obj1,obj2}
// console.log("obj3:", obj3);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// here the obejct wont get merge but it will create new key and put it there
const obj3 = Object.assign({}, obj1, obj2);
// Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object. here two sources are alllowed
const obj4 = { ...obj1, ...obj2 };
console.log("obj4:", obj4);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
// [ '1', '2' ]
// [ 'a', 'b' ]
console.log(obj1.hasOwnProperty('1'));
// it will return boolean if the property is present or not