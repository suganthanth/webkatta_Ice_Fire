const container = document.getElementById('container');

async function fetchIceAndFireData() {
  try {
    const response = await fetch('https://anapioficeandfire.com/api/books');
    const books = await response.json();

    // Display around 10 books
    const displayBooks = books.slice(0, 10);

    displayBooks.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');

      // Display the name and isbn of each book
      const name = document.createElement('h2');
      name.textContent = `Name: ${book.name}`;
      bookElement.appendChild(name);

      const isbn = document.createElement('p');
      isbn.textContent = `ISBN: ${book.isbn}`;
      bookElement.appendChild(isbn);

      // Display the number of pages in the book
      const pages = document.createElement('p');
      pages.textContent = `Number of Pages: ${book.numberOfPages}`;
      bookElement.appendChild(pages);

      // Display the authors of the book
      const authors = document.createElement('p');
      authors.textContent = `Authors: ${book.authors.join(', ')}`;
      bookElement.appendChild(authors);

      // Display the publisher name and the released date
      const publisher = document.createElement('p');
      publisher.textContent = `Publisher: ${book.publisher}`;
      bookElement.appendChild(publisher);

      const releasedDate = document.createElement('p');
      releasedDate.textContent = `Released Date: ${book.released}`;
      bookElement.appendChild(releasedDate);

      // Display at least 5 characters for each book
      const characters = document.createElement('p');
      characters.textContent = `Characters: ${book.characters.slice(0, 5).join(', ')}`;
      bookElement.appendChild(characters);

      container.appendChild(bookElement);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchIceAndFireData();
