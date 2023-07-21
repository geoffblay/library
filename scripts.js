const libraryContainer = document.querySelector('.library-container');
const addBookButton = document.getElementById('add-book-button');
const popupForm = document.getElementById('popup-form');
const submitButton = document.getElementById('submit-button');

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

addBookButton.addEventListener('click', openForm);
submitButton.addEventListener('click', handleSubmit);

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? 'Read' : 'Not Read';
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    // clear the library container
    libraryContainer.innerHTML = '';

    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        
        const bookTitle = document.createElement('h1');
        bookTitle.textContent = book.title;
        const bookAuthor = document.createElement('h2');
        bookAuthor.textContent = book.author;
        const bookPages = document.createElement('h3');
        bookPages.textContent = book.pages;
        const bookRead = document.createElement('h3');
        bookRead.textContent = book.read;

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);

        libraryContainer.appendChild(bookCard);
    });
}

function openForm(e) {
    e.preventDefault();
    console.log('open form');
    popupForm.style.display = 'block';
    addBookButton.style.display = 'none';
}

function handleSubmit(e) {
    e.preventDefault();
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    if (readInput.checked) {
        read = true;
    } else {
        read = false;
    }

    console.log(read)

    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    displayBooks();

    popupForm.style.display = 'none';
    addBookButton.style.display = 'block';
}