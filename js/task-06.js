const inputEl = document.querySelector('#validation-input');
const inputLength = Number(inputEl.dataset.length);

const handleInputElBlur = () => {
    if (inputEl.value.length === inputLength) {
        inputEl.classList.remove('invalid')
        inputEl.classList.add('valid')
    }
    else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
}

inputEl.addEventListener("blur", handleInputElBlur);