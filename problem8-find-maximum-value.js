/**
 * Task 8: Find Maximum Value
 * 
 * Write a function that takes an array of numbers and returns the maximum value.
 */

/**
 * Finds the maximum value in an array of numbers
 * @param {number[]} numbers - The array of numbers to search
 * @returns {number|null} - The maximum value, or null if array is empty
 */
function findMaximumValue(numbers) {
  // Check if the input array is empty
  if (numbers.length === 0) {
    return null;
  }
  
  // Method 1: Using Math.max with spread operator
  return Math.max(...numbers);
  
  // Method 2: Using Array.reduce (alternative implementation)
  // return numbers.reduce((max, current) => current > max ? current : max, numbers[0]);
  
  // Method 3: Using a loop (another alternative implementation)
  // let max = numbers[0];
  // for (let i = 1; i < numbers.length; i++) {
  //   if (numbers[i] > max) {
  //     max = numbers[i];
  //   }
  // }
  // return max;
}

// Test the function with different arrays
const testArrays = [
  [1, 3, 5, 7, 9],
  [-10, -5, 0, 5, 10],
  [42],
  [7, 7, 7, 7],
  [9, 8, 7, 6, 5],
  [1.5, 2.5, 3.5, 2.7],
  []
];

console.log("Maximum Value Tests:");
testArrays.forEach((arr, index) => {
  const max = findMaximumValue(arr);
  console.log(`Array ${index + 1}: [${arr}] → Maximum: ${max !== null ? max : 'N/A (empty array)'}`);
}); 