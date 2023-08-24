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
    formGroup.classList.add("error");
    formGroup.classList.remove("success");
    console.log(errorDisplay.classList);
};

const setSuccess = element => {
    const formGroup = element.parentElement;
    const errorDisplay = formGroup.querySelector(".error");

    errorDisplay.innerText = "";
    errorDisplay.classList.add("success");
    errorDisplay.classList.remove("error");
    console.log(errorDisplay.classList);
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = username.value.trim();

    if (usernameValue === "") {
        setError(username, "Username is required");
    }else {
        setSuccess(username);
    }

}