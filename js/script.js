function openForm() {
  document.getElementById("popupForm").style.display = "block";
  document.getElementById("bookContainer").classList.add("blur");
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
  document.getElementById("bookContainer").classList.remove("blur");
}

let myLibrary = [];

// book constructor
function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  /*this.info = function () {
    return `<strong>${this.title}</strong><br><strong>by</strong> ${this.author}<br>${this.pages} pages<br>${this.read}`;
  };*/
}

// does this upon form creation
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

// adds a new book to the library
function addBookToLibrary() {
  // Stays on the same page for the form after submitting
  const myForm = document.getElementById("form");
  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  const author = document.getElementById("author");
  const title = document.getElementById("title");
  const pages = document.getElementById("pages");
  const getSelectedValue = document.querySelector(   
    'input[name="read"]:checked');
  const read = getSelectedValue.value;
  const newBook = new Book(title.value, author.value, pages.value, read);
  myLibrary.push(newBook);
}

//Removes all the book classes from the page
function removeAll() {
  const elements = document.getElementsByClassName("book");
  while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
  }
}

//Sets the read id to "checked" depending on if it says 'Read' or not
function checkReadStatus(read, id){
  if(read === 'Read') {
    document.getElementById(id).checked = true;
  }
  else {
    document.getElementById(id).checked = false;
  }
}

// Updates the read status of the library and on the page
function updateReadStatus(id) {
  const getStatus = document.getElementById(id);
  const libraryPosition = parseInt(id.slice(-1));
  if (getStatus.checked){
    myLibrary[libraryPosition].read = 'Read';
  }
  else if (!getStatus.checked){
    myLibrary[libraryPosition].read = 'Not Read';
  }
  removeAll();
  displayBook();

}

function closeBook(id) {
  const libraryPosition = parseInt(id.slice(-1));
  myLibrary.splice(libraryPosition, 1);
  removeAll();
  displayBook();
}

// Loops through the array and displays each book on the page
function displayBook() {
  const bookContainer = document.getElementById("bookContainer");
  let readStatus = '';
  for (let i = 0; i < myLibrary.length; i++) {
    // puts the book in a new book container
    let newContainerDiv = document.createElement("div");
    newContainerDiv.classList = "book";
    newContainerDiv.id = `book${i}`;
    bookContainer.appendChild(newContainerDiv);
    const bookDetails = document.getElementById(`book${i}`);
    let titleDiv = document.createElement("div");
    titleDiv.classList = "bookTitle";
    titleDiv.innerHTML = `${myLibrary[i].title}
    <input type="checkbox" class="close" id="close${i}" onclick="closeBook('close${i}')">
    <label for="close${i}" class="closeSwitch">X</label>`;
    let authorDiv = document.createElement("div");
    authorDiv.classList = "bookAuthor";
    authorDiv.innerHTML = `<span style="font-size:14  px">by</span> ${myLibrary[i].author}`;
    let pagesDiv = document.createElement("div");
    pagesDiv.classList = "bookPages";
    pagesDiv.innerHTML = `${myLibrary[i].pages} pages`;
    let readDiv = document.createElement("div");
    readDiv.classList = "bookRead";
    readStatus = `${myLibrary[i].read}`;
    readDiv.innerHTML = `${readStatus}
    <input type="checkbox" class="readStatus" id="readStatus${i}" onclick="updateReadStatus('readStatus${i}')">
    <label for="readStatus${i}" class="readSwitch">
      <div class="slider"></div>           
    </label>`;
    bookDetails.appendChild(titleDiv);
    bookDetails.appendChild(authorDiv);
    bookDetails.appendChild(pagesDiv);
    bookDetails.appendChild(readDiv);
    checkReadStatus(readStatus, `readStatus${i}`);

  }
  return;
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'Not Read');
const theHobbit2 = new Book('The HobbitTWO', 'Tolkien', '500', 'Read');
myLibrary.push(theHobbit);
myLibrary.push(theHobbit2);
displayBook()

