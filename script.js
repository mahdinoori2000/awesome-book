/* eslint no-use-before-define: "off" */
/* eslint class-methods-use-this: "off" */
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
    this.allBooks = this.allBooks.filter(
      (book) => book.title !== title || book.authorName !== author,
    );
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

  saveCollection() {
    localStorage.setItem('allBooks', JSON.stringify(this.allBooks));
  }

  clearInputFields() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    titleInput.value = '';
    authorInput.value = '';
  }
}

const bookCollection = new BookCollection();
bookCollection.showBooks();
// NAVBAR ELEMENTS
const navListBtn = document.getElementById('list-section-btn');
const navAddBtn = document.getElementById('add-section-btn');
const navContactBtn = document.getElementById('contact-section-btn');
// SECTION ELEMENTS
const listSection = document.querySelector('.list');
const addSection = document.querySelector('.add');
const contactSection = document.querySelector('.contact');

navListBtn.addEventListener('click', () => {
  listSection.classList.remove('hidden');
  addSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});
navAddBtn.addEventListener('click', () => {
  listSection.classList.add('hidden');
  addSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
});
navContactBtn.addEventListener('click', () => {
  listSection.classList.add('hidden');
  addSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
});
