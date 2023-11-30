window.onload = function() {
  displayRecommendedBooks();
};

function displayRecommendedBooks() {
  const recommendedBooksContainer = document.getElementById('recommended-books').querySelector('.recommended-list');

  const popularBooks = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedDate: '1925', image: 'img/book1.jpg' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedDate: '1960', image: 'img/book2.jpg' },
    { id: 3, title: '1984', author: 'George Orwell', publishedDate: '1949', image: 'img/book3.jpg' },
    { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', publishedDate: '1951', image: 'img/book4.jpg' },
    { id: 5, title: 'Brave New World', author: 'Aldous Huxley', publishedDate: '1932', image: 'img/book5.jpg' },
    { id: 6, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', publishedDate: '1954', image: 'img/book6.jpg' }
  ];
  

  popularBooks.forEach(book => {
    const bookCard = `
      <div class="book-card" id="popular-book-${book.id}">
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Published Date: ${book.publishedDate}</p>
      </div>
    `;

    recommendedBooksContainer.innerHTML += bookCard;
  });
}

function searchBooks() {
  const searchInput = document.getElementById('search-input').value;
  const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&maxResults=12`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      displayBookList(data);
    })
    .catch(error => console.error('Error fetching data:', error));
}

function displayBookList(data) {
  const bookListContainer = document.getElementById('book-list');
  bookListContainer.innerHTML = '';

  if (data.items && data.items.length > 0) {
    data.items.forEach(bookItem => {
      const book = bookItem.volumeInfo;

      const bookInfo = `
        <div class="book-card">
          <img src="${book.imageLinks ? book.imageLinks.thumbnail : 'https://via.placeholder.com/150x200.png?text=No+Image'}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p>Author: ${book.authors ? book.authors.join(', ') : 'Unknown'}</p>
          <p>Published Date: ${book.publishedDate ? book.publishedDate : 'Unknown'}</p>
          <a href="${book.previewLink}" target="_blank">Preview</a>
        </div>
      `;

      bookListContainer.innerHTML += bookInfo;
    });
  } else {
    bookListContainer.innerHTML = '<p>No books found</p>';
  }
}
