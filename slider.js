const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = window.getComputedStyle(itemsList);
const items = document.querySelectorAll(".slider__item");
const itemWidth = getComputedStyle(items[0]).width;
const stepRight = parseInt(itemWidth);
const shownItems = 3;
const maxRight = (items.length - shownItems) * stepRight;
const minRight = 0;


rightBtn.addEventListener('click', e => {
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right);

    if (currentRight < maxRight) {
        currentRight += stepRight;
        itemsList.style.right = `${currentRight}px`;
    }
});

leftBtn.addEventListener('click', e => {
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right);

    if (currentRight > minRight) {
        currentRight -= stepRight;
        itemsList.style.right = `${currentRight}px`;
    }
})