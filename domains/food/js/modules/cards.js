function cards() {
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


    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //         });
    //     });

    axios.get('http://localhost:3000/menu')
        .then(data => {
            data.data.forEach(({ img, altimg, title, descr, price }) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
}

module.exports = cards;