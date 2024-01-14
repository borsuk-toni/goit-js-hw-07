"use strict";

const categories = document.querySelectorAll('li.item');

console.log(`Number of Categories: ${categories.length}`);

categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryElems = category.querySelectorAll('ul > li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElems}`);
  });