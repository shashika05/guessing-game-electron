"use strict";

// Set random number between 1-20 into x variable
let x = Math.trunc(Math.random() * 20) + 1;

// Make document.querySelector into function and make it shorter
const qS = function (text) {
  return document.querySelector(`.${text}`);
};

// ---- For Again Button
qS("again").addEventListener("click", function () {
  // again actions
  location.reload();
});

// For Check Button
qS("check").addEventListener("click", function () {
  let input1 = Number(qS("guess").value);
  if (input1 <= 0 || input1 > 20) {
    qS("message").textContent = "Please Enter a valid number between 1-20";
    console.warn(`Please Enter a valid number between 1-20`);
  } else {
    let guess = input1;
    if (guess === guess) {
      qS("message").textContent = "Enter another number";
    } else {
      return;
    }
    if (x !== guess) {
      // Loss and try again config

      if (guess > x) {
        // when guessing is greater
        if (guess > x && guess < x + 5) {
          qS("message").textContent = "Little bit high";
        } else {
          qS("message").textContent = "Too much high";
        }
      } else {
        // when guessing is lower
        if (guess < x && guess > x - 5) {
          qS("message").textContent = "Little bit low";
        } else {
          qS("message").textContent = "Too much low";
        }
      }

      // Score configs
      let score = Number(qS("score").textContent);
      score = score - 1;
      qS("score").textContent = score;
    } else {
      // Win config
      qS("message").textContent = `You won and your score is ${
        qS("score").textContent
      }`;
      qS("highscore").textContent = `${qS("score").textContent}`;
      qS("h1-titile").textContent = "Congrats You won!";
      qS("number").textContent = x;
      // CSS manipulating
      document.querySelector("body").style.backgroundColor = "#000000";
    }
  }
});
