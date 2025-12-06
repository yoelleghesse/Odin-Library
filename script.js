const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createBookCard(book) {
    const card = document.createElement("div");
    card.classList.add("book-card");

    const title = document.createElement("h2");
    title.classList.add("book-title");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = 'Author: ' + book.author;

    const pages = document.createElement("p");
    pages.textContent = 'Pages: ' + book.pages;

    const read = document.createElement("p");
    read.textContent = 'Read: ' + (book.read ? 'Yes' : 'No');

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    return card;
}


function displayLibrary() {
    const libraryContainer = document.getElementById("library-container");
    libraryContainer.innerHTML = '';

    myLibrary.forEach(book => {
        const bookCard = createBookCard(book);
        libraryContainer.appendChild(bookCard);
    })
}

addBookToLibrary(new Book("Dune", "Frank Herbert", 450, true));
addBookToLibrary(new Book("1984", "George Orwell", 328, false));

displayLibrary();