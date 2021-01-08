

const deadline = '2021-01-29';

function getRemainingTime(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
        
    updateClock();

    
    function updateClock() {
        const t = getRemainingTime(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }      
}

setClock('.timer', deadline);


const btn = document.querySelector('button'),
      text = document.querySelector('.test-text');


function getRandomInt(digit) {
    return Math.floor(Math.random() * Math.floor(digit));
}


btn.addEventListener('click', () => {
    const maxNum = 3;
    let getNum = getRandomInt(maxNum);
    if (getNum == 1) {
        text.innerHTML = '1';
    } else if (getNum == 2) {
        text.innerHTML = '2';
    } else if (getNum == 3) {
        text.innerHTML = '3';
    } else {
        text.innerHTML = 'error';
    }
});
