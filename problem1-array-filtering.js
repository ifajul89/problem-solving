// Task 1: Array Filtering and Mapping

const people = [
  { name: "John", age: 28, gender: "male" },
  { name: "Sarah", age: 32, gender: "female" },
  { name: "Michael", age: 45, gender: "male" },
  { name: "Emma", age: 24, gender: "female" },
  { name: "David", age: 36, gender: "male" },
  { name: "Lisa", age: 29, gender: "female" },
  { name: "Robert", age: 41, gender: "male" },
];

function filterAndMapPeople(peopleArray) {
  const malesOnly = peopleArray.filter((person) => person.gender === "male");

  const maleNames = malesOnly.map((person) => person.name);

  return maleNames;
}

const result = filterAndMapPeople(people);
console.log("Male names:");
console.log(result);
