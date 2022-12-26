function multiply(x, y) {
  console.log(x * y);
}
let copiedmultiply = multiply.bind(this, 2);
copiedmultiply(3);
// currying can take place by two ways one is the bind method and another is using closure
// here the 2 will be acting like x and 3 will be acting like y
// USING CLOSURES

function add(a) {
  return function (b) {
    console.log(a + b);
  };
}
let huru = add(3);
huru(5);
// console.log('huru:', huru)
