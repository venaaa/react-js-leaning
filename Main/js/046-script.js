'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// ---------------------------------------------

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// ----------------------------------------------

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     };
// }
// let serge = new User('Serge', 27);

// -----------------------------------------------

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// -----------------------------------------------

const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'red';
//     // e.target.style.backgroundColor = 'green';
// });

// ---------

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
});

// В обработчиках событий, когда мы классический синтаксис через 'function()' мы имеем доступ к контексту 'this' тоже самое что 'event.target'.
// Если мы используем стрелочную функцию '() => {}' то контекст вызова теряется и использовать мы его не можем - undefined.
// Когда обработчик события (callback) написан в
// классическом режиме "function()"
// контекст вызова будет сам элемент на котором произошло событие.
// По простому 'this' будет равняться 'event.traget'

// ------------------------------------------------

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();

// -------------------------------------------------

const double = (a) => {
    return a * 2;
};

// Если стрелочная функция помещается в одну строку - её можно сократить.
// Если стрелочная функция принимает только один аргумент, может быть написана без круглых скобок.

const double2 = a => a * 2;



// 1) Обычная функция: this = window, но если 'use strict' - undefined
// 2) Контекст у методов обьекта - сам обьект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind