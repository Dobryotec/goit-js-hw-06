const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit (event) {
    event.preventDefault();
    const { elements: {email, password}} = event.currentTarget;
    if (
      email.value === "" || password.value === ""
    ) {
      alert("Bсі поля повинні бути заповнені");
    } else {
      console.log("email:", email.value);
      console.log("password:", password.value);
    }
    form.reset();
// const formData = new FormData(event.currentTarget);
// console.log(formData);

// formData.forEach((value, name) => {
// console.log(name, value);
}

