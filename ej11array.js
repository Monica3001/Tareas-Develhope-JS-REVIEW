//Create a function called adultFilter that takes in
//an array of people and returns the ones who are of age.

function adultFilter(persons) {
  var adult = [];
  for (var i in persons) {
    if (persons[i].age >= 18) {
      adult.push(persons[i]);
    }
  }
  return adult;
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const adults = adultFilter(persons);

console.log(persons);
console.log(adults);


//other option:
//let adultfilter = persons.filter(function (persons) {
    //return persons.age > 18; });
 // console.log(adultfilter);
  


