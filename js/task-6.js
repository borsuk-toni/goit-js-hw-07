'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const renderedBoxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(numberInput.value);
  if (amount >= 1 && amount <= 100) {
    clearRenderedBoxes();
    onCreateBtnClick(amount);
    numberInput.value = '';
  }
});

destroyBtn.addEventListener('click', () => {
  clearRenderedBoxes();
});

function clearRenderedBoxes() {
  renderedBoxes.innerHTML = '';
};

function onCreateBtnClick(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    renderedBoxes.appendChild(box);
  }
};