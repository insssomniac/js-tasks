const amountSelector = document.querySelector('.dom__amount-selector');
const colorSelector = document.querySelector('.dom__color-selector');
const blocks = document.querySelector('.dom__blocks');

let colorChanged = false;

const createBlocks = amount => {
    let blocksMarkup = "";
    for (let i = 0; i < amount; i++) {
        const block = document.createElement('div');
        block.className = 'dom__item';
        block.innerText = i + 1;
        blocksMarkup += block.outerHTML;
    }

    return blocksMarkup;
}

const colorTheBlock = (block, color) => {
    block.style.backgroundColor = color;
}

const isEven = num => num % 2 === 0;


amountSelector.addEventListener('change', e => {
    const amount = e.target.value;
    blocks.innerHTML = createBlocks(amount);
});

colorSelector.addEventListener('change', e => {
    const color = e.target.value;
    const items = blocks.querySelectorAll('.dom__item');

    colorChanged = !colorChanged;

    if (colorChanged) {
        for (let i = 0; i < items.length; i++) {
            const colorToApply = isEven(i) ? color : '#fff';
            colorTheBlock(items[i], colorToApply);
        }
    } else {
        for (let i = 0; i < items.length; i++) {
            const colorToApply = isEven(i) ? '#fff' : color;
            colorTheBlock(items[i], colorToApply);
        }
    }

});