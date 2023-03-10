console.log(" 1. При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50" +
    "\n 2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50" +
    "\n 3. В разделе contacts реализован select с выбором городов +25" +
    "\n Итоговая оценка: 125 баллов");


/* Burger handler starts */

(function () {
    const burgerItem = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav');
    const closeButton = document.querySelector('.nav-close');
    const main = document.querySelector('.main');
    burgerItem.addEventListener('click', () => {
        navMenu.classList.add('nav-active');
    });
    closeButton.addEventListener('click', () => {
        navMenu.classList.remove('nav-active');
    });
    main.addEventListener('click', () => {
        navMenu.classList.remove('nav-active');
    });
}())

/* Burger handler ends */

/* Service buttons handler starts */

const cardsLoop = (element) => {
    document.querySelectorAll('.service__main-item').forEach((item) => {
        if (item.classList.contains(element)) {
            item.classList.toggle('iactive');
        }
    })
}

function func() {
    document.querySelectorAll('.service__buttons-item').forEach((item) => {
        if (document.querySelectorAll('.orange-state').length === 2) {
            if (!item.classList.contains('orange-state')) {
                item.disabled = true;
            }
        } else {
            document.querySelectorAll('.service__buttons-item').forEach((item) => {
                item.disabled = false;
            })
        }
    })
}

const buttonHandler = (callback, mainButton, secondaryButton, thirdButton, mainItem, secondItem, thirdItem) => {
    const orangeState = 'orange-state';
    mainButton.addEventListener('click', () => {
        mainButton.classList.toggle(orangeState);
        callback()
        if (secondaryButton.classList.contains(orangeState) || thirdButton.classList.contains(orangeState)) {
            cardsLoop(mainItem);
        } else {
            cardsLoop(secondItem) || cardsLoop(thirdItem);
        }
    })
}

(function () {
    const gardensButton = document.querySelector('.bgardens');
    const lawnCareButton = document.querySelector('.blawn');
    const plantingButton = document.querySelector('.bplanting')
    const itemGardenCareString = 'item-garden-care';
    const itemPlantingString = 'item-planting';
    const itemLawnCareString = 'item-lawn-care';

    buttonHandler(func, gardensButton, lawnCareButton, plantingButton, itemGardenCareString, itemPlantingString, itemLawnCareString);

    buttonHandler(func, lawnCareButton, gardensButton, plantingButton, itemLawnCareString, itemPlantingString, itemGardenCareString);

    buttonHandler(func, plantingButton, gardensButton, lawnCareButton, itemPlantingString, itemGardenCareString, itemLawnCareString);

}());

/* Service buttons handler ends */

/* Prices handler starts */

(function () {
    document.querySelectorAll('details').forEach((accordion) => {
        accordion.addEventListener('click', (e) => {
            document.querySelectorAll('details').forEach((event) => {
                if (accordion !== event) {
                    event.removeAttribute('open');
                }
            })
        });
    })
}());

/* Prices handler ends */

/* Select handler starts */

(function () {
    const selectItem = document.querySelectorAll('.select__item');
    const selectHeader = document.querySelectorAll('.select__header');
    const card1 = document.querySelector('.a1');
    const card2 = document.querySelector('.a2');
    const card3 = document.querySelector('.a3');
    const card4 = document.querySelector('.a4');

    card1.addEventListener('click', () => {
        if (document.querySelectorAll('.show-card').length > 0) {
            document.querySelectorAll('.idcard').forEach((item) => {
                item.classList.remove('show-card');
                document.querySelector('.item__details-card1').classList.add('show-card');
            })
        } else {
            document.querySelector('.item__details-card1').classList.add('show-card');
        }
    })

    card2.addEventListener('click', () => {
        if (document.querySelectorAll('.show-card').length > 0) {
            document.querySelectorAll('.idcard').forEach((item) => {
                item.classList.remove('show-card');
                document.querySelector('.item__details-card2').classList.add('show-card');
            })
        } else {
            document.querySelector('.item__details-card2').classList.add('show-card');
        }
    })

    card3.addEventListener('click', () => {
        if (document.querySelectorAll('.show-card').length > 0) {
            document.querySelectorAll('.idcard').forEach((item) => {
                item.classList.remove('show-card');
                document.querySelector('.item__details-card3').classList.add('show-card');
            })
        } else {
            document.querySelector('.item__details-card3').classList.add('show-card');
        }
    })

    card4.addEventListener('click', () => {
        if (document.querySelectorAll('.show-card').length > 0) {
            document.querySelectorAll('.idcard').forEach((item) => {
                item.classList.remove('show-card');
                document.querySelector('.item__details-card4').classList.add('show-card');
            })
        } else {
            document.querySelector('.item__details-card4').classList.add('show-card');
        }
    })


    selectItem.forEach((item) => {
        item.addEventListener('click', () => {
            document.querySelector('.contacts__dropdown').style.backgroundColor = '#C1E698';
        })
    })

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggleState)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectUpdateCurrentValue)
    });

    function selectToggleState() {
        this.parentElement.classList.toggle('caactive');
    }

    function selectUpdateCurrentValue() {
        let text = this.innerText,
            select = this.closest('.contacts__dropdown'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('caactive');
    }
}());

/* Select handler ends */