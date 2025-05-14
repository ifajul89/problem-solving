// Task 3: Function Composition

function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

function composedFunction(num) {
  return addFive(double(square(num)));
}

function compose(...functions) {
  return (input) => {
    return functions.reduceRight((result, fn) => {
      return fn(result);
    }, input);
  };
}

const squareDoubleThenAddFive = compose(addFive, double, square);

const testNumber = 3;
console.log(`Original number: ${testNumber}`);
console.log(`Using method 1: ${composedFunction(testNumber)}`);
console.log(`Using method 2: ${squareDoubleThenAddFive(testNumber)}`);