"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBtn = document.querySelector('.change-color');

colorBtn.addEventListener('click', function () {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  document.querySelector('.color').textContent = randomColor;
});