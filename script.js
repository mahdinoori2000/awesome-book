// Retrieving the books from localStorage or create a new empty array
let allBooks = JSON.parse(localStorage.getItem('allBooks')) || [];
// Add book
function addBooks() {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');
  const title = titleInput.value;
  const authorName = authorInput.value;
  if (title && authorName) {
    const bookList = { title, authorName };
    allBooks.push(bookList);
    console.log(allBooks);
    localStorage.setItem('allBooks', JSON.stringify(allBooks));
    titleInput.value = '';
    authorInput.value = '';
    showBooks();
  }
}
// remove a book
function removeBooks(title, author) {
  allBooks = allBooks.filter(
    (book) => book.title !== title || book.authorName !== author
  );
  localStorage.setItem('allBooks', JSON.stringify(allBooks));
  showBooks();
}
