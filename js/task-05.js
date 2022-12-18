const usernameInputEl = document.querySelector('#name-input');
const usernameOutputEl = document.querySelector('#name-output');

usernameInputEl.addEventListener("input", () => {
        usernameOutputEl.textContent = usernameInputEl.value;
});