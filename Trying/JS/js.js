const myset = new Set();
myset.add(1);
myset.add(3);
myset.add("Some random text");
myset.has(3); // true
myset.size; //3
myset.delete(3);
// console.log(myset);
for (const item of myset) {
  //   console.log(item);
}
const myArr = Array.from(myset);
console.log("myArr:", myArr);
const mySet2 = new Set([1, 2, 2, 3, 4]);
console.log(mySet2.size); // 4
console.log([...mySet2]); // [1, 2, 3, 4]
