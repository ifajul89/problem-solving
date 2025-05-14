//Task 6: Leap Year Checker

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  
  if (year % 100 === 0) {
    return false;
  }
  
  if (year % 4 === 0) {
    return true;
  }
  
  return false;
}

const testYears = [1900, 2000, 2004, 2020, 2023, 2024, 1800, 2100, 2400];

console.log("Leap Year Test Results:");
testYears.forEach(year => {
  console.log(`${year}: ${isLeapYear(year) ? 'Leap Year' : 'Not a Leap Year'}`);
});

const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

console.log(`\nHappy New Year ${currentYear}!`);
console.log(`Coming up next: ${nextYear} - ${isLeapYear(nextYear) ? 'a Leap Year!' : 'not a Leap Year.'}`); 