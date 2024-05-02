"use strict";
// Lesson10
const booksListContainer = document.querySelectorAll(".books");
const booksList = document.querySelectorAll(".book");
const ad = document.querySelector(".adv");

const firstBookElement = booksList[1];
const secondBookElement = booksList[0];
const thirdBookElement = booksList[4];
const forthBookElement = booksList[3];
const fifthBookElement = booksList[5];
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

const removeAd = function () {
  ad.remove();
};

const orderSecondBooksChapters = function () {
  const bookChapters = secondBookElement.querySelectorAll("ul > li");

  bookChapters[3].after(bookChapters[6]);
  bookChapters[4].before(bookChapters[8]);
  bookChapters[9].after(bookChapters[2]);
};

const orderFifthBooksChapter = function () {
  const bookChapters = fifthBookElement.querySelectorAll("ul > li");

  bookChapters[4].after(bookChapters[2]);
  bookChapters[3].before(bookChapters[9]);
  bookChapters[8].before(bookChapters[5]);
};

const addChapter = function () {
  const bookChapters = sixthBookElement.querySelectorAll("ul > li");
  const chapterEight = document.createElement("li");

  chapterEight.textContent = "Глава 8: За пределами ES6";

  bookChapters[8].after(chapterEight);
};

orderBooksList();
fixTitleName();
removeAd();
orderSecondBooksChapters();
orderFifthBooksChapter();
addChapter();
