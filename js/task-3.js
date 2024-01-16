'use strict';

const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', () => {
    const clearedInput = textInput.value.trim();
    output.textContent = clearedInput === '' ? 'Anonymous' : clearedInput;
});