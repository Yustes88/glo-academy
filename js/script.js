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
  const chapterOne = bookChapters[3];
  const chaptertwo = bookChapters[6];
  const chapterThree = bookChapters[8];
  const chapterFour = bookChapters[4];
  const chapterB = bookChapters[9];
  const chapterC = bookChapters[2];

  chapterOne.after(chaptertwo);
  chapterFour.before(chapterThree);
  chapterB.after(chapterC);
};

const orderFifthBooksChapter = function () {
  const bookChapters = fifthBookElement.querySelectorAll("ul > li");
  const chapterOne = bookChapters[9];
  const chapterTwo = bookChapters[3];
  const chapterThree = bookChapters[4];
  const chapterFour = bookChapters[2];
  const chapterA = bookChapters[5];
  const chapterB = bookChapters[8];

  chapterThree.after(chapterFour);
  chapterTwo.before(chapterOne);
  chapterB.before(chapterA);

  console.log(bookChapters);
};

orderBooksList();
fixTitleName();
removeAd();
orderSecondBooksChapters();
orderFifthBooksChapter();
