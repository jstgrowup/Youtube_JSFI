const coding = ["js", "ruby", "java", "python", "cpp"];
const values = coding.forEach((item) => {
  return item;
});
console.log("values", values);
// it will give undefined because foreach doesnt returns anything
const myNums = [1, 2, 3, 4, 5, 6, 7, 8];
let updatedNums = myNums.filter((num) => num > 3);
console.log("updatedNums:", updatedNums);
let updatedMN = myNums.map((num) => num + 10);
console.log("updatedMN:", updatedMN);
const myNewNums = [1, 2, 3, 4, 5];
let y = myNewNums.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log('y:', y)


