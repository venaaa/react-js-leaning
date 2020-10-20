


const arr = [12, 24, 3, 65, 18];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

console.log(arr.length);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});



arr.pop();      //Удаляет в конце
arr.push(10);   //Добавляет в конец

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}


const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));