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

function deleteBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }
}

function createTableRow(book) {
    const row = document.createElement("div");
    row.classList.add("row");

    const title = document.createElement("div");
    title.textContent = book.title;
    row.appendChild(title);

    const author = document.createElement("div");
    author.textContent = book.author;
    row.appendChild(author);

    const pages = document.createElement("div");
    pages.textContent = book.pages;
    row.appendChild(pages);

    const read = document.createElement("div");
    read.textContent = book.read ? "Read" : "Not Read";
    row.appendChild(read)

    const actions = document.createElement("div");
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.classList.add("delete-btn");
    btn.addEventListener("click", () => {
        deleteBook(book.id);
        displayLibrary();
    });
    actions.appendChild(btn);
    row.appendChild(actions);

    return row;
}


function displayLibrary() {
    const libraryContainer = document.getElementById("library-container");
    libraryContainer.innerHTML = '';

    const header = ["Title", "Author", "Pages", "Read", "Actions"];

    header.forEach(text => {
        const div = document.createElement("div");
        div.textContent = text;
        div.classList.add("header");
        libraryContainer.appendChild(div);
    })

    myLibrary.forEach(book => {
        const row = createTableRow(book);
        libraryContainer.appendChild(row);
    })
}

document.getElementById("book-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read-status").checked;

    addBookToLibrary(new Book(title, author, pages, read));
    displayLibrary();
    this.reset();
})

addBookToLibrary(new Book("Dune", "Frank Herbert", 450, true));
addBookToLibrary(new Book("1984", "George Orwell", 328, false));

displayLibrary();