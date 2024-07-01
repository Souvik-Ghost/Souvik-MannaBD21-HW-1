const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.listen(port, () => {
  console.log("Server running at http://localhost: " + port);
});

let book = {
  title: "The God of Small Things",
  author: "Arundhati Roy",
  publicationYear: 1997,
  genre: "Novel",
  isAvailable: true,
  stock: 5,
};

//1
app.get("/book", (req, res) => {
  res.json(book);
});
//book

//2
function getFullTitleAndAuthor(book) {
  return book.title + " by " + book.author;
}
app.get("/book/fulltitle-author", (req, res) => {
  let fullTitleAndAuthor = getFullTitleAndAuthor(book);
  res.json({ fullTitleAndAuthor: fullTitleAndAuthor });
});
///book/fulltitle-author

//3
function getGenreAndAvailability(book) {
  return {
    genre: book.genre,
    isAvailable: book.isAvailable,
  };
}
app.get("/book/genre-availability", (req, res) => {
  let genreAndAvailability = getGenreAndAvailability(book);
  res.json(genreAndAvailability);
});
//book/genre-availability

//4
function calculateBookAge(book) {
  let currentYear = 2024;
  return currentYear - book.publicationYear;
}
app.get("/book/age", (req, res) => {
  let bookAge = calculateBookAge(book);
  res.json({ age: bookAge });
});
//book/age

//5
function getBookSummary(book) {
  return "Title: " + book.title + ", Author: " + book.author + ", Genre: " + book.genre + ", Publication: " + book.publicationYear;
}
app.get("/book/summary", (req, res) => {
  let summary = getBookSummary(book);
  res.json({ summary: summary });
});
//book/summary

//6
function checkStockAndOrder(book) {
  if (book.stock > 0) {
    return { status: "In Stock", stock: book.stock };
  }
  else {
    return { status: " Out of Stock ", message: "Order Required" };
  }
}
app.get("/book/stock-status", (req, res) => {
  let stockStatus = checkStockAndOrder(book);
  res.json(stockStatus);
});