// Task 8: Find Maximum Value

function findMaximumValue(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  return Math.max(...numbers);
}

const testArrays = [
  [1, 3, 5, 7, 9],
  [-10, -5, 0, 5, 10],
  [42],
  [7, 7, 7, 7],
  [9, 8, 7, 6, 5],
  [1.5, 2.5, 3.5, 2.7],
  [],
];

console.log("Maximum Value Tests:");
testArrays.forEach((arr, index) => {
  const max = findMaximumValue(arr);
  console.log(
    `Array ${index + 1}: [${arr}] → Maximum: ${
      max !== null ? max : "N/A (empty array)"
    }`
  );
});
