const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", e => {
    e.preventDefault();

    if (validateInput()){ //kalau sudah benar semua bisa submit, kalau salah ulangi
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

const cekEmail = value => {
    //kalau salah return, kalau benar mbalik ke validateInput
    if (value === "") {
        setError(email, "Email is required");
        return false;
    }
    if (!/\$+@\$+\.\$+/.test(value)) {
        setError(email, "Please enter a valid email address")
    }
    /*
    penjelasan code diatas (chatgpt) : 
    /\S+@\S+\.\S+/
    /: Delimiters to enclose the regular expression.
    \S+: Matches one or more non-whitespace characters.
    @: Matches the literal "@" character.
    \.: Matches the literal dot (period) character.
    \S+: Matches one or more non-whitespace characters again.
    This regular expression is structured to check if the email input:

    Contains at least one non-whitespace character before the @ symbol.
    Contains at least one non-whitespace character after the @ symbol.
    Contains at least one non-whitespace character after the dot (period) in the domain part.
    */
    setSuccess(email);
    return true;
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
    if (value.length < 8) {
        setError(password, "Password must be 8 letters or more");
        return false;
    }

    setSuccess(password);
    return true;
};

const cekConfirmPassword = (pValue, cpValue) => {
    if (cpValue === "") {
        setError(confirmPassword, "Confirm password is empty");
        return false;
    }
    if (pValue !== cpValue) {
        setError(confirmPassword, "Password doesn't match")
        return false;
    }

    setSuccess(confirmPassword);
    return true;
}

const validateInput = () => {
    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    const isEmailValid = cekEmail(emailValue);
    const isUsernameValid = cekUsername(usernameValue);
    const isPasswordValid = cekPassword(passwordValue);
    const isConfirmPasswordValid = cekConfirmPassword(passwordValue, confirmPasswordValue);

    //kalau salah langsung return, kalau benar mbalik ke eventlistener
    if (isEmailValid && isUsernameValid && isPasswordValid && isConfirmPasswordValid){
        return true;
    }

    return false; 
};