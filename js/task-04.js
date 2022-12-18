const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const handleDecrementBtnElClick = () => {
    counterValue -= 1
    valueEl.textContent = counterValue;
}

const handleIncrementBtnElClick = () => {
    counterValue += 1
    valueEl.textContent = counterValue;
}

decrementBtnEl.addEventListener('click', handleDecrementBtnElClick);
incrementBtnEl.addEventListener('click', handleIncrementBtnElClick);