'use strict';

// ------- filter

// const names = ['ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// ------- map

// let answer = ['SerG', 'AnnA', 'Chello'];

// answer = answer.map(item => item.toLowerCase());

// console.log(answer);

// ------- every/some

const some = [4, 'qweq', 'sherif mine'];

// console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number'));

// ------- reduce

// const arr = [4, 5, 1, 3, 2, 6];
//                         // 0       4
//                         // 4       5
//                         // 9       1
//                         // 10      3
//                         // 13      2
//                         // 15      6
//                         // 21
// const res = arr.reduce((sum, current) => sum + current, 3);

// console.log(res);


// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);


// -------------------

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);