class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  // add book to Book object

  addBook(item) {
    const bookList = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.classList.add("margin");
    row.innerHTML = `
    <td>${item.title}</td>
    <td>${item.author}</td>
    <td>${item.isbn}</td>
    <td><a href="" class="delete">X</a></td>
    `;

    bookList.appendChild(row);
  }

  // Show Alert

  showAlert(message, className) {
    const container = document.querySelector(".container");
    const form = document.getElementById("book-form");
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.textContent = message;
    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  // Clear value of input
  clearInsideInput() {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const isbn = document.getElementById("isbn");

    title.value = "";
    author.value = "";
    isbn.value = "";
  }

  // delete book from UI

  deleteBook(target) {
    console.log(target);
    if (target.className == "delete") {
      const ui = new UI();
      const removeText =
        target.parentElement.previousElementSibling.previousElementSibling
          .previousElementSibling.textContent;

      target.parentElement.parentElement.remove();
      ui.showAlert(removeText + " removed", "error");
    }
  }

  // Remove book from localStorage

  removeFromLS(isbn) {
    const books = getFromLocalStore();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("book", JSON.stringify(books));
  }
}

function getFromLocalStore() {
  const frls = JSON.parse(localStorage.getItem("book"));
  return frls === null ? [] : frls;
}

// Event Listening

const form = document.getElementById("book-form");

form.addEventListener("submit", (e) => {
  const ui = new UI();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  const getfrls = getFromLocalStore();
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all form", "error");
  } else {
    const book = new Book(title, author, isbn);
    localStorage.setItem("book", JSON.stringify([...getfrls, book]));
    ui.addBook(book);
    ui.showAlert(title + " book Added", "success");
    ui.clearInsideInput();
  }

  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", () => {
  const frls = JSON.parse(localStorage.getItem("book"));

  const ui = new UI();

  frls.forEach((item) => {
    console.log(item.title);
    ui.addBook(item);
  });

  console.log("Heloo World");
});
const bookList = document.getElementById("book-list");

bookList.addEventListener("click", (e) => {
  const ui = new UI();
  // Remove book from UI
  ui.deleteBook(e.target);
  // Remove book from localStorage

  const target = e.target.parentElement.previousElementSibling.textContent;

  ui.removeFromLS(target);

  e.preventDefault();
});

// Google API search : `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
