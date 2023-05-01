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
    // const status = readStatus();
    // console.log(readStatus)
    const addBook = new Book(getTitle, getAuthor, getPages, readStatus())
    myLibrary.push(addBook);
    // console.log(myLibrary)
}

function readStatus() {
    const getStatus = document.getElementById('status');
    const getValue = getStatus.hasAttribute('checked');
    if (getValue === true) {
        getStatus.setAttribute('value', 'On')
        return ('You have read it.')
        // set text for true n false
    } else {
        getStatus.setAttribute('value', 'Off')
        return ("You did'nt read it yet.")
    }
}

// readStatus();

function createBookCon(item) {
    const createCard = document.createElement('div');
    createCard.setAttribute('id', 'card');
    const createTitle = document.createElement('h1');
    createTitle.innerHTML = item.title;
    const createAuthor = document.createElement('h2');
    createAuthor.innerHTML = item.author;
    const createPages = document.createElement('h3');
    createPages.innerHTML = item.pages;
    const createStatus = document.createElement('h3')
    createStatus.innerHTML = item.status;

    createCard.append(createTitle, createAuthor, createPages, createStatus);
    bookContainer.append(createCard);
}
// console.log(createBookCon())


function displayBooks(e) {
    e.preventDefault;
    // let books;
    addBookToLibrary();
    for (const book of myLibrary) {
        createBookCon(book)
    }
    // for (let i = 0; i < myLibrary.length; i++) {
    //     // console.log(bookContainer = "<div> myLibrary[i]</div>")
    //     booksTitle = myLibrary[0];
    //     books = myLibrary[0];
    //     booksTitle = myLibrary[0];
    //     console.log(books)
    //     // bookContainer.innerHTML = myLibrary[i];
    //     // console.log(bookContainer.innerHTML = myLibrary)
    //     // console.log(bookContainer)/
    // }
    // bookContainer.innerHTML = books;
}


// console.log(displayBooks())
const subBtn = document.getElementById('btn');
subBtn.addEventListener('click', displayBooks);
// const theHobbit = new Book('The Hobbit', "J.R.R. Tolkien", 295, 'Not read yet!');
