let myLibrary = [];
let bookContainer = document.getElementById('book-container');


function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary() {
    const getTitle = document.getElementById('title').value;
    const getAuthor = document.getElementById('author').value;
    const getPages = document.getElementById('pages').value;
    const pageText = `${getPages} pages`

    if (getTitle === '' || getAuthor === '' || getPages === '') {
        alert('Plaese fill all inputs.')
    } else {
        const addBook = new Book(getTitle, getAuthor, pageText, readStatus())
        myLibrary.push(addBook);
        clearBooks();
    }
}

Object.assign(Book, clearBooks);
function clearBooks() {
    this.title.value = '';
    this.author.value = '';
    this.pages.value = '';
}

function readStatus() {
    const getStatus = document.getElementById('status');
    // const getValue = getStatus.hasAttribute('checked');
    if (getStatus.checked == true) {
        getStatus.setAttribute('value', 'On')
        return ('You have read it.')
    } else {
        getStatus.setAttribute('value', 'Off')
        return ("You did'nt read it yet.")
    }
}


function createBook(item) {
    const createCard = document.createElement('div');
    createCard.setAttribute('class', 'card');
    const createTitle = document.createElement('h1');
    createTitle.innerHTML = item.title;
    const createAuthor = document.createElement('h2');
    createAuthor.innerHTML = item.author;
    const createPages = document.createElement('h3');
    createPages.innerHTML = item.pages;
    const createStatus = document.createElement('h3');
    createStatus.innerHTML = item.status;
    const addRemoveButton = document.createElement('button');
    addRemoveButton.textContent = 'Remove';
    createCard.append(createTitle, createAuthor, createPages, createStatus, addRemoveButton);
    bookContainer.append(createCard);
    // Make Book History
    // bookHistory();
    clearLibrary();
    addRemoveButton.addEventListener('click', () => {
        createCard.remove();
    });
}


// console.log(this.createBook())
// addRemoveButton.addEventListener('click', (e) => {
//     console.log(bookContainer)
// })

// addRemoveButton.addEventListener('click', removeBook)

function removeBook() {
    createCard.remove();
}

function clearLibrary() {
    myLibrary = [];
}

function displayBooks(e) {
    e.preventDefault();
    addBookToLibrary();
    for (const book of myLibrary) {
        createBook(book)
    }
}

const subBtn = document.getElementById('btn');
subBtn.addEventListener('click', displayBooks);
