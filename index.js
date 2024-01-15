// function compose(funcs) {
//   return function (num) {
//     return funcs.reduce((acc, element) => {
//       return element(acc);
//     }, num);
//   };
// }

// const pipeline = [
//   (num) => num - 1,
//   (num) => num * 10,
//   (num) => `${num} as a string`,
// ];

// const composed = compose(pipeline);

// console.log(composed(4));
// => `30 as a string`
(function () {
  var a = (b = 3);
})();
console.log(typeof a);
console.log(typeof b);
