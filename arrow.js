//Turn the variables functions into arrow functions and 
//combine the functions so that the result of the following 
//mathematical operation is printed on the console:
// ((2 + 4) * (5 + 2) - 2) / 5

// const sum = function (a, b) {
//     return a + b;}
// const subtract = function (a, b) {
//     return a - b; }
// const multiply = function (a, b) {
//   return a * b;}
//const divide = function (a, b) {
//   return a / b;}
// const log = function (value) {
//   console.log(value);}


const sum = (a,b) => a + b ;
console.log(sum(2,4));

const subtract = (c,d,e) => c + d- e ;
console.log(subtract(5,2,2));

const multiply = (e,f) => e * f; 
console.log (multiply(6,5));

const divide = (g,h) => g / h;
console.log((divide(30,2)))


const log = (a,b,c,d,e,f) => (((a + b) * (c + d) - e) / f );
console.log(log (2,4,5,2,2,5));

