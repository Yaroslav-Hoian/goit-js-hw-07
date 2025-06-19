const register = document.querySelector("form.login-form");

register.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    }

    console.log(`Login: ${email}, Password: ${password}`);
    form.reset();
}





