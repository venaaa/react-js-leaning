window.addEventListener('DOMContentLoaded', () => {

    // ---------------------------------- TABS -----------------------------------
        const tabs = document.querySelectorAll('.tabheader__item'),
              tabsContent = document.querySelectorAll('.tabcontent'),
              tabsParent = document.querySelector('.tabheader__items');
    
        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }
    
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
        }
    
    
    
    
        hideTabContent();
        showTabContent();
        // console.log(tabsParent);
    
        tabsParent.addEventListener('click', (event) => {
            const target = event.target;
    
            if (target && target.classList.contains('tabheader__item')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
        // ---------------------------------- // TABS ------------------------------
    
        // ----------------------------------- TIMER -------------------------------
    
        const deadline = '2021-01-29';
    
        function getTimeRemaining(endtime) {
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
                const t = getTimeRemaining(endtime);
    
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
        // --------------------------------- // TIMER --------------------------
    

        // --------------------------------- MODAL -----------------------------

        //-------------MY TRY------
        // const modalShow = document.querySelectorAll('[data-modal]'),
        //       modalHide = document.querySelector('[data-close]'),
        //       modal = document.querySelector('.modal');

        // modalShow.forEach(item => {
        //     item.addEventListener('click', () => {
        //         modal.classList.add('show');
        //     });
        // });

        // modalHide.addEventListener('click', () => {
        //     modal.classList.remove('show');
        //     // modal.classList.add('hide');
        // });
        //-------------------------------
        const modalTrigger = document.querySelectorAll('[data-modal]'),
              modal = document.querySelector('.modal'),
              modalCloseBtn = document.querySelector('[data-close]');


        function openModal() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            // modal.classList.toggle('show');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimerId);
        }

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', openModal);
        });


        function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show');
            // modal.classList.toggle('show');
            document.body.style.overflow = '';
        }

        modalCloseBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });

        // const modalTimerId = setTimeout(openModal, 5000);

        function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
        }

        window.addEventListener('scroll', showModalByScroll);

        // --------------------------------- // MODAL --------------------------

        // --------------------------------- MENU CLASSES ------------------------------
        // ------- my try
        // const menuItem = document.querySelector('.menu__item');
        // const menuTitle = menuItem.querySelector('.menu__item-subtitle');
        // const menuDesc = menuItem.querySelector('.menu__item-descr');
        // const menuPrice = menuItem.querySelector('.menu__item-price');

        // class FoodCard {
        //     constructor(bgImg, titleText, desc, price) {
        //         this.bgImg = bgImg;
        //         this.titleText = titleText;
        //         this.desc = desc;
        //         this.price = price;
        //     }

        //     setCard() {
        //         menuTitle.innerHTML = this.titleText;
        //         menuDesc.innerHTML = this.desc;
        //         menuPrice.innerHTML = `Цена: ${this.price}`;
        //     }
        // }

        // const newItemCard = new FoodCard('', 'Helloooo', 'lorem ipsum', '2500');
        // newItemCard.setCard();
        // ---- my try ----

        class MenuCard {
            constructor(src, alt, title, descr, price, parentSelector, ...classes) { //рест ...classes
                this.scr = src;
                this.alt = alt;
                this.title = title;
                this.descr = descr;
                this.price = price;
                this.classes = classes;
                this.parent = document.querySelector(parentSelector); // берем класс родителя
                this.transfer = 27;
                this.changeToUAH();
            }

            changeToUAH() {
                this.price = this.price * this.transfer; // функция, которая конвектирует доллары в валюту
            }

            render() {
                const element = document.createElement('div'); // создаем новый див
                if (this.classes.length === 0) { //проверяем, если рест оператор пустой. Мы присваиваем класс по умолчанию 'menu__item'
                    this.element = 'menu__item';
                    element.classList.add(this.element);
                } else { // если нет, перебираем каждый елемент и добавляем туда класс.
                    this.classes.forEach(className => element.classList.add(className));
                }
                element.innerHTML = `
                    <img src=${this.scr} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                `;
                this.parent.append(element);
            }
        }
        // Класс карточки с методами создан.

        new MenuCard(
            'img/tabs/vegy.jpg',
            'vegy',
            'Меню "Фитнес"',
            'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            9,
            '.menu .container',
            'menu__item'
        ).render();

        new MenuCard(
            'img/tabs/elite.jpg',
            'veelitegy',
            'Меню “Премиум”',
            'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            14,
            '.menu .container',
            'menu__item'
        ).render();

        new MenuCard(
            'img/tabs/post.jpg',
            'post',
            'Меню "Постное',
            'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
            21,
            '.menu .container',
            'menu__item'
        ).render();
        // --------------------------------- // MENU ---------------------------

    });


    // Из main/script.js
    // REST оператор. Похож на *args **kwargs в python

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};
log('basic', 'rest', 'operator', 'moderator', 'usage', 'boris');


function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}
calcOrDouble(3, 5);