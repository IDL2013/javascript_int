// Create Library class to encapsulate library operations
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getBooks() {
        return this.books;
    }
}

const myLibrary = new Library();

// Create Constructor to add new book 
function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Adds a new book to the library
function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  book.id = crypto.randomUUID(); // Ensure browser compatibility for crypto.randomUUID
  myLibrary.addBook(book);
  displayBooks(); // Update the DOM
}

// Add event listener for the 'addBookBtn' button
document.getElementById('addBookBtn').addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  const pages = parseInt(document.getElementById('bookPages').value, 10);
  const read = document.getElementById('bookRead').checked;

  if (title && author && !isNaN(pages)) {
    addBookToLibrary(title, author, pages, read);
    document.querySelector('form').reset(); // Clear form inputs
  } else {
    alert('Please fill out all fields correctly.');
  }
});
// Create function to display books

function displayBooks() {
    const libraryElement = document.querySelector('.library');
    if (!libraryElement) {
        console.error("Element with class 'library' not found in the DOM.");
        return;
    }
    libraryElement.innerHTML = ''; // Clear existing content
    for (const book of myLibrary.getBooks()) {
        const bookCard = document.createElement('li');
        bookCard.classList.add('book-card');
        bookCard.id = book.id;

        const readStatus = book.read ? "Read" : "Not Read";
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${readStatus}</p>`;
        libraryElement.appendChild(bookCard);
    }
}


// Call displayBooks whenever a new book is added
addBookToLibrary = function(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    book.id = crypto.randomUUID();
    myLibrary.addBook(book);
    displayBooks(); // Update the DOM
};