'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', rubToUsd);
inputUsd.addEventListener('input', usdToRub);

// inputRub.addEventListener('input', () => {
//     const request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('load', () => {
//         if (request.status === 200) {
//             const data = JSON.parse(request.response);
//             inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
//         } else {
//             inputUsd.value = 'Что то пошло не так';
//         }
//     });
//     // status //статус запроса (404, 200 и т.д.)
//     // statustText //текстовый статус (успешно, хорошо, ошибка и т.д.)
//     // responce //ответ от сервера
//     // readyState //текущее состояние запроса
// });


function rubToUsd() {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'Что то пошло не так';
        }
    });
}

function usdToRub() {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputRub.value = (+inputUsd.value * data.current.usd).toFixed(2);
        } else {
            inputRub.value = 'Что то пошло не так';
        }
    });
}

