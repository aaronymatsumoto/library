function openForm() {
  document.getElementById("popupForm").style.display = "block";
  
  //apply blur background when open
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";

  //remove blur background when open

}

let myLibrary = [];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${pages} pages, ${read} yet`
  };
}

function addBookToLibrary() {
  const myForm = document.getElementById("form");
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  
  const author = document.getElementById("author");
  const title = document.getElementById("title");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");
  const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  
}


/*
function displayBook() {

}
*/

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'Not Read');
//console.log(theHobbit.info());

myLibrary.push(theHobbit);
