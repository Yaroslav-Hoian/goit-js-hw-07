const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const info = {
        email: email,
        password: password
    }


    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    }

    console.log(info);
    form.reset();
}





