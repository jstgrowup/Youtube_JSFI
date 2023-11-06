function calculateCartPrice(...num1) {
  // this is a rest operator
  return num1;
}
console.log(calculateCartPrice(200, 300, 400));
function handleObject(anyObject) {
  // this is a rest operator
  console.log(
    `username is ${anyObject.userName} and price is ${anyObject.price}`
  );
}
let object = {
  userName: "subham",
  price: 23,
};
handleObject(object)
