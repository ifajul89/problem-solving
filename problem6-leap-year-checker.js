/**
 * Task 6: Leap Year Checker
 * 
 * Write a function that determines whether a given year is a leap year.
 * 
 * Leap Year Rules:
 * 1. Years divisible by 4 are leap years
 * 2. However, years divisible by 100 are NOT leap years
 * 3. Unless they are also divisible by 400, in which case they ARE leap years
 */

/**
 * Checks if a given year is a leap year
 * @param {number} year - The year to check
 * @returns {boolean} - True if the year is a leap year, false otherwise
 */
function isLeapYear(year) {
  // Check if year is divisible by 400
  if (year % 400 === 0) {
    return true;
  }
  
  // Check if year is divisible by 100
  if (year % 100 === 0) {
    return false;
  }
  
  // Check if year is divisible by 4
  if (year % 4 === 0) {
    return true;
  }
  
  // If none of the above conditions are met, it's not a leap year
  return false;
}

// Test the function with various years
const testYears = [1900, 2000, 2004, 2020, 2023, 2024, 1800, 2100, 2400];

console.log("Leap Year Test Results:");
testYears.forEach(year => {
  console.log(`${year}: ${isLeapYear(year) ? 'Leap Year' : 'Not a Leap Year'}`);
});

// Happy New Year example
const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;

console.log(`\nHappy New Year ${currentYear}!`);
console.log(`Coming up next: ${nextYear} - ${isLeapYear(nextYear) ? 'a Leap Year!' : 'not a Leap Year.'}`); 