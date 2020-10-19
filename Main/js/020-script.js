

const options = {
    name: 'Serhii',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Oh, Hi!')
    }
};

options.makeTest();
console.log(Object.keys(options).length);


const {border, bg} = options.colors;
console.log(border);


console.log(options.name);

// console.log(options['colors']['border']);

console.log(options);


let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

