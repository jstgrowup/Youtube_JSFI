// "use strict"
// const myset = new Set();
// myset.add(1);
// myset.add(3);
// myset.add("Some random text");
// myset.has(3); // true
// myset.size; //3
// myset.delete(3);
// console.log(myset);
// for (const item of myset) {
// console.log(item);
// }
// const myArr = Array.from(myset);
// console.log("myArr:", myArr);
// const mySet2 = new Set([1, 2, 2, 3, 4]);
// console.log(mySet2.size); // 4
// console.log([...mySet2]); // [1, 2, 3, 4]
// console.log(
//   [1, , 3].map((x, index) => {
//     console.log(`Visit ${index}`);
//     return x * 2;
//   })
// );
// localStorage.setItem("yo","sdfas")
// console.log('x:', x)
// x=23
let user = {
  name: "subham",
  age: 23,
  getdetails() {
    // here this is pointing to the parent object here it is the function
    console.log(this.name);
  },
  childobj: {
    newName: "subu",
    getnestedData() {
      // here this is pointing to the childobj rather than the user obj therefore we will get undefined for this.name
      // but we get subu as the newName value
      console.log(this.newName, this.name);
    },
  },
};
user.getdetails();
user.childobj.getnestedData();
//////////////////////////////////////////////////////////
let realuser = {
  name: "subham",
  getdetails: () => {
    console.log(this.name);
    // here the this is pointing to the window object and there is nothing called name in the window object
  },
  gethuru: {
    getdetails: () => {
      // no matter what this will always point to the window object
      console.log(this.name);
    },
  },
  getlastdetails() {
    // arrow function takes the this of its parent and here the parent is getdetails
    // so therefore it is taking name as subham
    const nested = () => console.log(this.name);
    nested();
  },
};
realuser.getlastdetails();
realuser.gethuru.getdetails();
///////////////////////////////////////////////////////
class User {
  constructor(n) {
    this.name = n;
  }
  getName() {
    console.log(this.name);
  }
}
const huruser = new User("subham");
huruser.getName();
///////////////////////////////////////////////////////
const secondUser = {
  firstname: "xyz",
  getname() {
    const firstname = "subhan";
    return this.firstname;
    // here the firstname will be referred to the objects firstname that means the parent objects firstname
    // this refers to teh parent object rather than the function
  },
};
console.log(secondUser.getname());
//////////////////////////////////////////////////////
function makeUser() {
  return {
    name: "subham",
    ref: this,
  };
}
const Usser=makeUser()
console.log('Usser:', Usser.ref.name)