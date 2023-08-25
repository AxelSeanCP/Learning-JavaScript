const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector(".error");

    errorDisplay.innerText = message;

    element.style.border = "1px #ff3860 solid";
};

const setSuccess = element => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector(".error");

    errorDisplay.innerText = "";
    
    element.style.border = "1px #09c372 solid";
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = username.value.trim();

    if (usernameValue === "") {
        setError(username, "Username is required");
    }else {
        setSuccess(username);
    }

    if (passwordValue === "") {
        setError(password, "Password is required");
    } else {
        setSuccess(password);
    }

}