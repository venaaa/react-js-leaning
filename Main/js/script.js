/*jslint node: true */
'use strict';

// ========= GETTER/SETTER 068 ===========

// const persone = {
// 	name: 'Alex',
// 	age: 25,

// 	get userAge() {
// 		return this.age;
// 	},

// 	set userAge(num) {
// 		this.age = num;
// 	}
// };

// console.log(persone.userAge = 30); //когда вызываем геттер, в конце не ставим круглые скобки.
// console.log(persone.userAge);

// ========= / GETTER/SETTER 068 ============

// ========= 069 INCAPSULATION ============

// FUNCTIONS
// function User(name, age) {
// 	this.name = name;
// 	let userAge = age;

// 	this.say = function() {
// 		console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
// 	};

// 	this.getAge = function() {
// 		return userAge;
// 	};

// 	this.setAge = function(age) {
// 		if (typeof age === 'number' && age > 0 && age < 110) {
// 			userAge = age;
// 		} else {
// 			console.log('Недопустимое значение');
// 		}
// 	};
// }

// const serge = new User('Serge', 27);
// console.log(serge.name);
// console.log(serge.getAge()); 

// serge.setAge(30);
// serge.setAge(300);
// console.log(serge.getAge());

// serge.say();

// CLASSES
// class User {
// 	constructor(name, age) {
// 		this.name = name;
// 		this._age = age;
// 	}

// 	#surname = 'Brewyak';

// 	say = () => {
// 		console.log(`Имя пользователя: ${this.name}${this.#surname}, возраст ${this._age}`);
// 	}

// 	get age() {
// 		return this._age;
// 	}

// 	set age(age) {
// 		if (typeof age === 'number' && age > 0 && age < 110) {
// 			this._age = age;
// 		} else {
// 			console.log('Недопустимое значение');
// 		}
// 	}
// }

// const serge = new User('Serge', 27);

// // console.log(serge.age);
// // serge.age = 99;
// // console.log(serge.age);
// console.log(serge.surname);
// serge.say();

// ========= / 069 INCAPSULATION ============

// ========= 070 МОДУЛИ ===============

// const app = '123';

// const number = 1;

// (function(){
// 	let number = 2;
// 	console.log(number);
// 	console.log(number + 3);
// }());

// console.log(number);

// const user = (function () {
// 	const privat = function () {
// 		console.log('I am privat!');
// 	};

// 	return {
// 		sayHello: privat
// 	};
// }());

// user.sayHello();

// ========= / 070 МОДУЛИ ===============