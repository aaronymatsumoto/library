function openForm() {
  document.getElementById("popupForm").style.display = "block";
  
  //apply blur when open
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";

  //remove blur when open

}

/*
let myLibrary = [

];*/

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${pages} pages, ${read} yet`
  }
}

/*
function addBookToLibrary() {
  //take user input and store new book objects into an array
  myLibrary.push(______);
}


function displayBook() {

}
*/

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');
console.log(theHobbit.info());



