//Create the function nicknameMap using the for loop,
//which takes in an array of people and returns a nicknames array.
//the nickname must be composed as follows: <name>-<age>.

function nicknameMap(persons) {
  for (i = 0; i < persons.length; i++) {
    
    let nicknames = persons[i].name + "-" + persons[i].age;
    console.log(nicknames);
  }
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

const nicknames = nicknameMap(persons);
console.log(persons);
 console.log(nicknames);
