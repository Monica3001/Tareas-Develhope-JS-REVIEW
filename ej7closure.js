// Try to write your first closure. Write a function called printName and 
// declare inside it a variable called helloName, the value of this variable
//  will be: "Hello John". Also declare a function named inner and return the 
//  helloName variable. The purpose is printing "Hello John" in the console.

// Starting from the previous exercise, 
// are you able to print the value of helloName, after 1 second?

function printName() {
    helloName="hello John"; 

 function inner() {
    
     setTimeout(() => {
      console.log(helloName)
       } ,1000);
 }
 inner()
 }
 printName();


 