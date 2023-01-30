console.log(" 1. Вёрстка соответствует макету. Ширина экрана 768px +24" +
    "\n 2. Вёрстка соответствует макету. Ширина экрана 380px +24" +
    "\n 3. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. " +
    "\n 4. На ширине экрана 380рх и меньше реализовано адаптивное меню +22 \n Итоговая оценка: 75 баллов");


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

const buttonHandler = (mainButton, secondaryButton, thirdButton, mainItem, secondItem, thirdItem) => {
    const orangeState = 'orange-state';
    mainButton.addEventListener('click', () => {
        mainButton.classList.toggle(orangeState);
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

    buttonHandler(gardensButton, lawnCareButton, plantingButton, itemGardenCareString, itemPlantingString, itemLawnCareString);

    buttonHandler(lawnCareButton, gardensButton, plantingButton, itemLawnCareString, itemPlantingString, itemGardenCareString);

    buttonHandler(plantingButton, gardensButton, lawnCareButton, itemPlantingString, itemGardenCareString, itemLawnCareString);

}())

/* Service buttons handler ends */