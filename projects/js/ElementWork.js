"use strict";

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper'); 

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

btns[1].style.borderRadius  = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = `background-color:blue; width: 500px`;

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Hello');
div.classList.add('black');

wrapper.append(div);
div.innerHTML = "<h1>Hello world</h1>";
// div.textContent = "Hello";
div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');


// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
//wrapper.insertBefore(div, hearts[0] );
//hearts[1].after(div);
// circles[0].remove();
// wrapper.removeChild(hearts[1]);
// hearts[0].replaceWith(circles[0]);