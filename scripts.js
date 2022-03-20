// OPEN CLOSE MODAL
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
function closeModal(){
    modal.style.display = "none";
}
function showModal(){
    modal.style.display="block";
}
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

// LIBRARY
let myLybrary = [];

function newBook (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};
newBook.prototype.changeRead = function(){
    if( this.read == "UNREAD"){
        this.read = "READ";
    }else {
        this.read = "UNREAD";
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

// ADD BOOKS TO DOM
function createLibrary(){
    for(let i = 0; i < myLybrary.length; i++ ){
        newBookCard(myLybrary[i]);
        document.querySelector(".book-card:last-child").dataset.bookNumber = i;
    };
    const removeButtons = document.querySelectorAll(".remove-button")

    removeButtons.forEach(button =>{
        button.addEventListener("click", () => {
            const arrayIndex = button.parentElement.parentElement.dataset.bookNumber
            removeBook(arrayIndex);
        });
    });
    const readButtons = document.querySelectorAll(".change-button")

    readButtons.forEach(button =>{
        button.addEventListener("click", () =>{
            const arrayIndex = button.parentElement.parentElement.parentElement.dataset.bookNumber
            changeReadStatus(arrayIndex);
        })
    })

};

// REMOVE BOOK BUTTON
function removeBook(a){
    myLybrary.splice(a,1);
    bookWrapper.innerHTML = "";
    createLibrary();
}

// CHANGE READ STATUS
function changeReadStatus(a){
    myLybrary[a].changeRead();
    bookWrapper.innerHTML = "";
    createLibrary();
}

// MODAL FORM TO BOOK OBJECT
function addBookForm(){
    const noErrors = validateForm();
    if(noErrors){
        formToBook();
        bookWrapper.innerHTML = "";
        createLibrary();
        closeModal();
    }
};

const modalSubmitButton = document.querySelector("#modalSubmit");
modalSubmitButton.onclick = function(){
    addBookForm();
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

