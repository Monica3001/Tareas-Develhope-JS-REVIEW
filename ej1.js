// Create a function named calculateSalary which takes an input parameter,
//  and calculates and returns the corresponding salary. 
//  You must use the switch switch statement. 
//  For each role the corresponding salary is as follows:

// ceo => 2200€
// manager => 1800€
// cto => 1800€
// developer => 1500€
// default => 1000€

let  ceo = 2200;
let manager =1800;
let cto = 1800;
let developer = 2500;

function calculateSalary(role) {

switch(ceo) {
  case 2200:
    console.log("El salario del ceo son 2200");
    break;
  case 1800:
    console.log("el salario del manager son 1800");
    break;
  case 1800:
    console.log("El salario del cto son 1800");
    break;
  case 2500:
    console.log("El salario del developer son 1500");
    break;
  default:
    console.log("el salario son 1000");
    break;
}
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary)
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);


