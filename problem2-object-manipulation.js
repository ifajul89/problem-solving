/**
 * Task 2: Object Manipulation
 * 
 * Create an array of objects representing books with properties like title, author, and year.
 * Write a function that takes the array and returns a new array with only the book titles.
 * Print the result.
 */

// Create an array of books with title, author, and year properties
const books = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '1984', author: 'George Orwell', year: 1949 },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 }
];

// Function to extract book titles from an array of book objects
function extractBookTitles(booksArray) {
  // Use the map method to extract only the title from each book object
  return booksArray.map(book => book.title);
}

// Execute the function and print the result
const bookTitles = extractBookTitles(books);
console.log('Book titles:');
console.log(bookTitles); 