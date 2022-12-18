const inputChange = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

const handleInputTextInput = () => {
  inputText.style.fontSize = `${inputChange.value}px`;
};

inputChange.addEventListener("input", handleInputTextInput);