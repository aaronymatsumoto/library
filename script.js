function openForm() {
  document.getElementById("popupForm").style.display = "block";
  
  //apply blur background when open
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";

  //remove blur background when open

}

let myLibrary = [];
let myBooks = [];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title}\nby ${this.author}\n${this.pages} pages\n${this.read}`;
  };
}

function checkForm() {
  addBookToLibrary();
  let myLibrarySize = myLibrary.length - 1;
  for (let i in myLibrary[myLibrarySize]){
    if (myLibrary[myLibrarySize][i] == ""){
      myLibrary.pop();
      return false;
    }
  }
  removeAll();
  closeForm();
  displayBook();
  return true;
}

function addBookToLibrary() {
  // Stays on the same page for the form after submitting
  const myForm = document.getElementById("form");
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const author = document.getElementById("author");
  const title = document.getElementById("title");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");
  const newBook = new Book(title.value, author.value, pages.value, read.value);
  myLibrary.push(newBook);
}

function removeAll() {
  const elements = document.getElementsByClassName("book");
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
}

// Loops through the array and displays each book on the page
function displayBook() {
  const bookContainer = document.getElementById("bookContainer");
  for (let i = 0; i < myLibrary.length; i++) {
    myBooks[i] = document.createElement("div");
    myBooks[i].classList= "book";
    myBooks[i].innerHTML = myLibrary[i].info();
    bookContainer.appendChild(myBooks[i]);
  }
  return;
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'Not Read');
myLibrary.push(theHobbit);

