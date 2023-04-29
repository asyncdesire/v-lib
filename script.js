let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function () {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages,${this.status}.`)
    }
}

function addBookToLibrary() {
    const title = document.getElementById('title').nodeValue;
}

addBookToLibrary(); 
const theHobbit = new Book('The Hobbit', "J.R.R. Tolkien", 295, 'Not read yet!')

