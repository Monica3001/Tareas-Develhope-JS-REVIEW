// Create an object person. Print its key/value pair 
// in the console. Try to use the method Object.keys:

const person = {
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  }


//key names:
for (const key in person ){
console.log(key)
}
//key structure:
console.log (Object.keys(person))

//other way key names:
let keys= Object.keys(person);
console.log(keys)
 
//values and structure
let values= Object.values(person);
console.log(values)

//key, value and structure:
let entries= Object.entries(person);
console.log(entries)

//key and values in list:
Object.entries(person).forEach(([key, val]) => console.log(`${key}: ${val}`));

