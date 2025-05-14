// Task 2: Object Manipulation

const books = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '1984', author: 'George Orwell', year: 1949 },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 }
];

function extractBookTitles(booksArray) {
  return booksArray.map(book => book.title);
}

const bookTitles = extractBookTitles(books);
console.log('Book titles:');
console.log(bookTitles); 