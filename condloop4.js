// Create a function sumUntil that takes in a parameter and 
// retunrs the sum of all numbers ranging from one to the value
//  passed as parameter.

// Example:

// function sumUntil(maxValue) {
// }

// console.log(sumUntil(5)); // OUTPUT: 15


function sumUntil(maxValue) {
  var total = 0;
    for(var i = 1; i <= maxValue; i++){
      total += i;
    }
    return total;
  }
console.log(sumUntil(5))
