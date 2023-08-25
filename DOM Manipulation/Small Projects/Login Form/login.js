const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", e => {
    e.preventDefault();

    if (validateInputs()) {  //kalau sudah benar semua bisa submit, kalau salah ulangi
        form.submit();
    }
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

const cekUsername = value => {
    if (value === "") {
        setError(username, "Username is required");
        return false;
    }

    setSuccess(username);
    return true;
};

const cekPassword = value => {
    if (value === "") {
        setError(password, "Password is required");
        return false;
    }

    setSuccess(password);
    return true;
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = username.value.trim();

    const isUsernameValid = cekUsername(usernameValue);
    const isPasswordValid = cekPassword(passwordValue);

    //kalau salah langsung return, kalau benar mbalik ke eventlistener
    if (isUsernameValid && isPasswordValid){
        return true;
    }

    return false;
}