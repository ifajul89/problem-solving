/**
 * Task 1: Array Filtering and Mapping
 * 
 * Create an array of objects, each representing a person with properties like name, age, and gender.
 * Write a function to filter out all females and then map the remaining people to an array of names.
 * Print the final result.
 */

// Create an array of people with name, age, and gender properties
const people = [
  { name: 'John', age: 28, gender: 'male' },
  { name: 'Sarah', age: 32, gender: 'female' },
  { name: 'Michael', age: 45, gender: 'male' },
  { name: 'Emma', age: 24, gender: 'female' },
  { name: 'David', age: 36, gender: 'male' },
  { name: 'Lisa', age: 29, gender: 'female' },
  { name: 'Robert', age: 41, gender: 'male' }
];

// Function to filter out females and map to an array of names
function filterAndMapPeople(peopleArray) {
  // Filter out females (keep only males)
  const malesOnly = peopleArray.filter(person => person.gender === 'male');
  
  // Map the remaining people to an array of names
  const maleNames = malesOnly.map(person => person.name);
  
  return maleNames;
}

// Execute the function and print the result
const result = filterAndMapPeople(people);
console.log('Male names:');
console.log(result); 