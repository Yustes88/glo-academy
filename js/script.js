"use strict";
// Lesson10
const booksListContainer = document.querySelectorAll(".books");
const booksList = document.querySelectorAll(".book");
console.log(booksListContainer, booksList);

const firstBookElement = booksList[1];
const secondBookElement = booksList[0];
const thirdBookElement = booksList[4];
const forthBookElement = booksList[3];
const fifthBookElement = booksList[6];
const sixthBookElement = booksList[2];

const orderBooksList = function () {
  booksListContainer[0].prepend(firstBookElement);
  booksListContainer[0].append(sixthBookElement);
  forthBookElement.before(thirdBookElement);
};

const fixTitleName = function () {
  const thirdBookTitle = thirdBookElement.querySelector("h2 > a");
  thirdBookTitle.textContent = "Книга 3. this и Прототипы Объектов";
};

orderBooksList();
fixTitleName();
