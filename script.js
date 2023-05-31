/* eslint no-use-before-define: "off" */
class BookCollection {
  constructor() {
    this.allBooks = JSON.parse(localStorage.getItem('allBooks')) || [];
    this.addButton = document.getElementById('add-btn');
    this.addButton.addEventListener('click', this.addBook.bind(this));
  }
  addBook() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const title = titleInput.value;
    const authorName = authorInput.value;
    if (title && authorName) {
      const bookList = { title, authorName };
      this.allBooks.push(bookList);
      this.saveCollection();
      this.clearInputFields();
      this.showBooks();
    }
  }
  removeBook(title, author) {
    this.allBooks = this.allBooks.filter(book => book.title !== title || book.authorName !== author);
    this.saveCollection();
    this.showBooks();
  }

  showBooks() {
    const booksList = document.getElementById('book-list');
    booksList.innerHTML = '';
    this.allBooks.forEach((book) => {
      const list1 = document.createElement('span');
      const list = document.createElement('li');
      list.classList.add('list-item');
      list1.textContent = `"${book.title}" by ${book.authorName}`;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
      removeButton.addEventListener('click', () => this.removeBook(book.title, book.authorName));
      list.appendChild(list1);
      list.appendChild(removeButton);
      booksList.appendChild(list);
    });
  }
}

const bookCollection = new BookCollection();
bookCollection.showBooks();
// Retrieving the books from localStorage or create a new empty array
// let allBooks = JSON.parse(localStorage.getItem('allBooks')) || [];

// // Show Books
// function showBooks() {
//   const booksList = document.getElementById('book-list');
//   booksList.innerHTML = '';
//   allBooks.forEach((book) => {
//     const list1 = document.createElement('span');
//     const list = document.createElement('li');
//     list.classList.add('list-item');
//     list1.textContent = `"${book.title}" by ${book.authorName}`;
//     const removeButton = document.createElement('button');
//     removeButton.textContent = 'Remove';
//     removeButton.classList.add('remove-btn');
//     removeButton.addEventListener('click', () => removeBooks(book.title, book.authorName));
//     list.appendChild(list1);
//     list.appendChild(removeButton);
//     booksList.appendChild(list);
//   });
// }
// // remove a book
// function removeBooks(title, author) {
//   allBooks = allBooks.filter(
//     (book) => book.title !== title || book.authorName !== author,
//   );
//   localStorage.setItem('allBooks', JSON.stringify(allBooks));
//   showBooks();
// }
// // Add book
// const addBtn = document.getElementById('add-btn');
// addBtn.addEventListener('click', () => {
//   const titleInput = document.getElementById('title');
//   const authorInput = document.getElementById('author');
//   const title = titleInput.value;
//   const authorName = authorInput.value;
//   if (title && authorName) {
//     const bookList = { title, authorName };
//     allBooks.push(bookList);
//     localStorage.setItem('allBooks', JSON.stringify(allBooks));
//     titleInput.value = '';
//     authorInput.value = '';
//     showBooks();
//   }
// });
// showBooks();
