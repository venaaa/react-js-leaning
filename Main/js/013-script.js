

if (4 == 9) {
    console.log('OK!');
} else {
    console.log('not OK');
}

const num = '50';

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Ok!');
}


switch (num) {
    case '49':
        console.log('NOT TRUE');
        break;

    case '100':
        console.log('NOT TRUE');
        break;
        
    case '50':
        console.log('TRUE NOW');
        break;

    default:
        console.log('NOT THIS TIME');
        break;
}