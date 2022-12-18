const formBtnEl = document.querySelector(".login-form");

const handleSubmit = (event) => {
    const {
    elements: { email, password }
    } = event.currentTarget;
    
if (email.value === "" || password.value === "") {
return alert("Всі поля повинні бути заповнені.");
}
console.log(`Email: ${email.value} Password: ${password.value}`);  
     event.currentTarget.reset();
     event.preventDefault();
}

formBtnEl.addEventListener("submit", handleSubmit);