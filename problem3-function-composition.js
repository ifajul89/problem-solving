/**
 * Task 3: Function Composition
 * 
 * Write three functions: one to square a number, one to double a number, and one to add 5 to a number.
 * Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
 */

// Function to square a number
function square(num) {
  return num * num;
}

// Function to double a number
function double(num) {
  return num * 2;
}

// Function to add 5 to a number
function addFive(num) {
  return num + 5;
}

// Method 1: Create a composite function by nesting function calls
function composedFunction(num) {
  return addFive(double(square(num)));
}

// Method 2: Using a general-purpose composition function
function compose(...functions) {
  return (input) => {
    return functions.reduceRight((result, fn) => {
      return fn(result);
    }, input);
  };
}

// Create the composed function using the composition helper
const squareDoubleThenAddFive = compose(addFive, double, square);

// Test both methods with a sample number
const testNumber = 3;
console.log(`Original number: ${testNumber}`);
console.log(`Using method 1: ${composedFunction(testNumber)}`);
console.log(`Using method 2: ${squareDoubleThenAddFive(testNumber)}`);

// Expected result: 
// 3² = 9, 9 × 2 = 18, 18 + 5 = 23 