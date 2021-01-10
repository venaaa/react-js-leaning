

// ----------------------- Функции-конструкторы
// функция является обьектом
// Что то похожее на .self в пайтоне
// стандарт ES5
// далее будет ES6 с классами

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

// КЛАССЫ СТАНДАРТА ES6
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello ${this.name}`);
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`);
    }
}
// -------------------------------

// prototype модифицируем, не изменяя основной обьект
User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
};

const serge = new User('Serge', 28);
const alex = new User('Alex', 20);

serge.exit();

serge.hello();
alex.hello();

console.log(serge);
console.log(alex);
