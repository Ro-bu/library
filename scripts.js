// OPEN CLOSE MODAL
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
modalClose.onclick = function(){
    modal.style.display="none";
};
window.onclick = function(){
    if (event.target == modal){
        modal.style.display = "none";
    }
};
const addBook = document.querySelector(".add-book");
addBook.onclick = function(){
    modal.style.display="block";
};

// LIBRARY

let myLybrary = [{title:"Good Book", author:"best author jr", pages:"74", read:"UNREAD"}, {title:"Good Book2", author:"best author jr 2", pages:"742", read:"READ"}];

function newBook (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

function createLibrary(){
    for(let i = 0; i < myLybrary.length; i++ ){

    }
}
const bookWrapper = document.querySelector(".book-wrapper")

function newBookCard (book){
    const bookCard = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const readDiv = document.createElement("div");
    const readText = document.createElement("div");
    const readButton = document.createElement("button");
    const removeButton = document.createElement("button");
    const bookButtonCont = document.createElement("div")

    bookCard.classList.add("book-card");
    readDiv.classList.add("read-button-cont");
    readButton.classList.add("change-button");
    removeButton.classList.add("remove-button");
    readText.classList.add("read-unread")
    bookButtonCont.classList.add("book-button-cont")

    title.textContent = `"${book.title}"`
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`
    readText.textContent = book.read
    readButton.textContent = "CHANGE"
    removeButton.textContent = "REMOVE"

    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    readDiv.appendChild(readText)
    readDiv.appendChild(readButton)
    bookButtonCont.appendChild(readDiv)
    bookButtonCont.appendChild(removeButton)
    bookCard.appendChild(bookButtonCont)

    bookWrapper.appendChild(bookCard)
}