function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyBg = document.querySelector('body');
const changeBtn = document.querySelector('.change-color');
const textSpan = document.querySelector('.color');

changeBtn.addEventListener('click', () => { 
  bodyBg.style.backgroundColor = getRandomHexColor();
  textSpan.textContent = bodyBg.style.backgroundColor; 
});