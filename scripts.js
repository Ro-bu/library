// OPEN CLOSE MODAL
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
modalClose.onclick = function(){
    closeModal();
};
window.onclick = function(){
    if (event.target == modal){
        closeModal();
    }
};
const addBook = document.querySelector(".add-book");
addBook.onclick = function(){
    showModal();
};

function closeModal(){
    modal.style.display = "none";
}
function showModal(){
    modal.style.display="block";
}

// LIBRARY

let myLybrary = [{title:"Good Book", author:"best author jr", pages:"74", read:"UNREAD"}, {title:"Good Book2", author:"best author jr 2", pages:"742", read:"READ"}];

function newBook (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};
// ADD BOOKS TO DOM
function createLibrary(){
    for(let i = 0; i < myLybrary.length; i++ ){
        newBookCard(myLybrary[i]);
    }
}

// CREATE SINGLE BOOK CARD
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
    readText.classList.add("read-unread");
    bookButtonCont.classList.add("book-button-cont");

    title.textContent = `"${book.title}"`;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    readText.textContent = book.read;
    readButton.textContent = "CHANGE";
    removeButton.textContent = "REMOVE";

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    readDiv.appendChild(readText);
    readDiv.appendChild(readButton);
    bookButtonCont.appendChild(readDiv);
    bookButtonCont.appendChild(removeButton);
    bookCard.appendChild(bookButtonCont);

    bookWrapper.appendChild(bookCard);
};

// MODAL FORM TO BOOK OBJECT

const modalSubmitButton = document.querySelector("#modalSubmit");
modalSubmitButton.onclick = function(){
    addBookForm();
};

function addBookForm(){
    const noErrors = validateForm();
    if(noErrors){
        formToBook();
        bookWrapper.innerHTML = "";
        createLibrary();
        closeModal();
    }
};

function formToBook(){
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector('input[name="read"]:checked').value;

    const bookToAdd = new newBook(title, author, pages, read);
    myLybrary.push(bookToAdd);

    const form = document.querySelector("form");
    form.reset();
};

// FORM VALIDATION

function validateForm(){
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const errorMessages = document.querySelectorAll(".error-message");
    if(title == "" || author == "" || pages <= 0 || pages.match(/[^0-9]/)){
        errorMessages.forEach(message => message.classList.add("active"));
        return false;
    } else{
        errorMessages.forEach(message => message.classList.remove("active"));
        return true;
    }
}

