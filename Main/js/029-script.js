'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = 'background-color: yellow; width: 500px';


btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'purple';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'purple';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут бы я');

div.classList.add('black', 'btn-nice');

wrapper.append(div);
// wrapper.prepend(div);
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[1]);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = '<h1>Hello World</h1>';

// div.textContent = 'Hello';

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');